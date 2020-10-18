//DONE//task 1:
//start button starts game, hides current content, adds search bar and search button.

//DONE//task 2:
//the search button does an ajax call based on the user input.
//modal pops up showing pokemon name, image, type, attack stat, defense stat, a confirm button, and a cancel button.
//the user needs to pick 3 pokemon
var g_currentpokemon;
var userTeam = [];
$("#search-btn").on("click", function () {
  event.preventDefault();
  var userInput = $("#input").val();
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    g_currentpokemon = response;

    console.log("response:", response);

    var pokeID = response.id;
    var imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      pokeID +
      ".png";
    var name2 = response.name;

    name2 = name2.charAt(0).toUpperCase() + name2.slice(1);
    $("#pokename").text(name2);
    $("#pokeimage").html("<div><img src=" + imageURL + "></div>");

    var type = response.types[0].type.name;

    type = type.charAt(0).toUpperCase() + type.slice(1);
    $("#poketype").text(type + " type");

    $("#pokeattack").text("Attack stat: " + response.stats[1].base_stat);
    $("#pokedefense").text("Defense stat: " + response.stats[2].base_stat);
    $("#pokespeed").text("Speed stat: " + response.stats[5].base_stat);
    $("#pokeexp").text(response.base_experience);

    //task 3:
    //if add to team is clicked, current pokemon is added to team, clears image, stats/info, and search bar.
    //if cancel is clicked, everything clears and does not add pokemon to team. user cannot add more than 3.
    //progress bar of some sort to show how many pokemon are left to choose.
  });
});

$("#add-button").on("click", function () {
  var pokemoninfo = {
    name: g_currentpokemon.name,
    type: g_currentpokemon.types[0].type.name,
    attack: g_currentpokemon.stats[1].base_stat,
    defense: g_currentpokemon.stats[2].base_stat,
    speed: g_currentpokemon.stats[5].base_stat,
    base_exp: g_currentpokemon.base_experience,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      g_currentpokemon.id +
      ".png",
  };

  userTeam.push(pokemoninfo);
  console.log("current team", userTeam);
  localStorage.setItem("User Team", JSON.stringify(userTeam));
  clearPokeSearch();
  $("#input").val("");

  if (userTeam.length === 3) {
    pokeButtons();
  }
});

$("#cancel-button").on("click", function () {
  clearPokeSearch();
  $("#input").val("");
});

function startGame(arr) {}

function clearPokeSearch() {
  $("#pokename").text("");
  $("#pokeimage").html("");
  $("#poketype").text("");
  $("#pokeattack").text("");
  $("#pokedefense").text("");
  $("#pokespeed").text("");
  $("#pokeexp").text("");
}

function pokeButtons() {
  var userpokemon = JSON.parse(localStorage.getItem("User Team"));
  var poke1 = userpokemon[0].name;
  var poke2 = userpokemon[1].name;
  var poke3 = userpokemon[2].name;
  $("#pokename").addClass("hide");
  $("#pokeimage").addClass("hide");
  $("#poketype").addClass("hide");
  $("#pokeattack").addClass("hide");
  $("#pokedefense").addClass("hide");
  $("#pokespeed").addClass("hide");
  $("#beginFight").addClass("hide");
  $("#add-button").addClass("hide");
  $("#cancel-button").addClass("hide");

  $("#poke-button-1").removeClass("hide");
  $("#poke-button-2").removeClass("hide");
  $("#poke-button-3").removeClass("hide");

  $("#poke-button-1").html("<button>" + poke1 + "</button>");
  $("#poke-button-2").html("<button>" + poke2 + "</button>");
  $("#poke-button-3").html("<button>" + poke3 + "</button>");
}

$(".pokebutton").on("click", function () {
  battlePreveiw();
});

//after user 3rd pokemon is added to users team, as assortment of 3 buttons appears showing the users pokemon team, 1 pokemon per button.
//when the user selects a pokemon on their team (by clicking the corresponding button), the battlefield modal appears.

//task 4:
//create an array which holds the AIs possible pokemon choices
//AFTER the user picks their 3 pokemon, the AI picks 3 pokemon randomly from the array

function compTeamCreator() {
  compTeam = [];

  for (var i = 0; i < 3; i++) {
    var randomPokemon = Math.floor(Math.random() * Math.floor(721));
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + randomPokemon;
    var name = "";
    var attack = "";
    var defense = "";
    var speed = "";
    var image = "";
    var baseEXP = "";

    // Ajax randomly generates Pokemon for the AI Team
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var pokeId = response.id;
      name = response.forms[0].name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      speed = response.stats[5].base_stat;
      attack = response.stats[1].base_stat;
      defense = response.stats[2].base_stat;
      baseEXP = response.base_experience;
      image =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        pokeId +
        ".png";

      // Creates object out of Pokemon Data to be added to AI Team
      var compPokemon = {
        name: name,
        attack: attack,
        defense: defense,
        speed: speed,
        base_exp: baseEXP,
        image: image,
      };

      // Creates Team and pushes results to Local Storage for later calls
      compTeam.push(compPokemon);
      console.log("test", compTeam);
      localStorage.setItem("aiTeam", JSON.stringify(compTeam));
    });
  }
}

compTeamCreator();

$("#testMe").on("click", function () {
  battlePreveiw();
});

//task 5:
//When battle starts, the users pokemon choices will show up on buttons with the pokemons image
//when the user clicks one of their pokemon choices, a modal it appears on the  "battlefield" div with the user choice pokemon and ai choice pokemon
//clicking the fight button will determine winner
var fightBtn = $("<button>");
var battlefield = $("<div>");
var userPokemon = $("<div>");
var computerPokemon = $("<div>");
var versus = $("<div>");
var modal = $("<div>");

// Starts the fight from the Battle Preview Screen
fightBtn.on("click", function () {
  pokemonBattle();
  fightBtn.remove();
  battlefield.remove();
  userPokemon.remove();
  computerPokemon.remove();
  versus.remove();
  modal.remove();
});

function battlePreveiw() {
  var compTeamArr = JSON.parse(localStorage.getItem("aiTeam"));
  var userTeamArr = JSON.parse(localStorage.getItem("User Team"));
  var randomTeamPokemon = Math.floor(
    Math.random() * Math.floor(compTeamArr.length)
  );

  // User's Pokemon Appears Here
  userPokemon.css({
    background: "red",
    border: "solid",
    color: "black",
    height: "245px",
    width: "245px",
    float: "left",
    "text-align": "center",
  });
  var userName = $("<h2>");
  var userImg = $("<img>");

  var userPokeName = userTeamArr[0].name;
  var userPokePic = userTeamArr[0].image;

  userName.text(userPokeName);
  userImg.attr("src", userPokePic);
  userImg.css({
    height: "150px",
    width: "150px",
  });

  userPokemon.append(userName);
  userPokemon.append(userImg);

  // Computer Pokemon Appears here
  computerPokemon.css({
    background: "white",
    border: "solid",
    color: "black",
    height: "245px",
    width: "245px",
    float: "right",
    "text-align": "center",
  });

  var aiName = $("<h2>");
  var aiImg = $("<img>");
  var challenger = randomTeamPokemon;
  localStorage.setItem("opposingPokemon", challenger);

  var aiPokeName = compTeamArr[challenger].name;
  var aiPokePic = compTeamArr[challenger].image;

  aiName.text(aiPokeName);
  aiImg.attr("src", aiPokePic);
  aiImg.css({
    height: "150px",
    width: "150px",
  });

  computerPokemon.append(aiName);
  computerPokemon.append(aiImg);

  // Black Box between the two pokemon
  versus.css({
    background: "black",
    border: "solid",
    "border-color": "black",
    color: "white",
    width: "45px",
    height: "125px",
    float: "left",
    "padding-top": "120px",
    "text-align": "center",
  });
  versus.text("VS");

  // Button to Initiate Fight Function
  fightBtn.text("Fight!");
  fightBtn.css({
    width: "550px",
    "text-align": "Center",
    border: "solid",
  });

  // Holds the Pokemon Facing each other
  battlefield.css({
    background: "grey",
    height: "200px",
    width: "550px",
    "z-index": "2",
    "margin-top": "16%",
    "margin-left": "32%",
  });

  // Greys out behind it
  modal.css({
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.4)",
  });

  battlefield.append(userPokemon);
  battlefield.append(versus);
  battlefield.append(computerPokemon);
  battlefield.append(fightBtn);

  modal.append(battlefield);

  $("body").append(modal);
}

//task 6:
//when fight button is clicked, a winner determined by:
//the pokemon with the higher speed stat attacks first
//if attacking pokemons attack stat > defending pokemons defense stat, it will ko it.
//the pokemon with the lower speed will attack second in the same manner if it is not KO'd
//if there is a tie (neither pokemon KO each other), the winner will be determined by whichever pokemon has the higher base experience stat.
//when a pokemon is KO'd, both sides are able to pick a new pokemon (AI picks random from choices), the defeated pokemon will be removed from that teams choices. The winners pokemon is not removed.

// Starts the battle
function pokemonBattle() {
  var userPokemon = JSON.parse(localStorage.getItem("User Team"));
  var computerPokemon = JSON.parse(localStorage.getItem("aiTeam"));
  var challenger = localStorage.getItem("opposingPokemon");

  var pokemon1 = userPokemon[0];
  var pokemon2 = computerPokemon[challenger];

  console.log(pokemon1);
  console.log(pokemon2);

  // Compares Pokemon's Speed and Decides who attacks
  if (pokemon1.speed > pokemon2.speed) {
    console.log("Pokemon 1 is faster");
    pokeAttack(pokemon1, pokemon2);
  } else {
    console.log("Pokemon 2 is faster");
    pokeAttack(pokemon2, pokemon1);
  }
}

// Decides the winner
function pokeAttack(attacker, defender) {
  if (attacker.attack > defender.defense) {
    console.log("attacker wins");
    winScreen(attacker);
  } else {
    console.log("attacker loses");
    pokeAttack(defender, attacker);
  }
}

// Displays the Winner
function winScreen(winner) {
  var winnerPokemon = $("<div>");
  var modal = $("<div>");
  var winImg = $("<img>");
  var pokeWinner = $("<h2>");

  // Box that holds Winner Pokemon Name and Image
  winnerPokemon.css({
    background: "red",
    border: "solid",
    color: "black",
    height: "260px",
    width: "245px",
    "text-align": "center",
    "z-index": "2",
    "margin-top": "16%",
    "margin-left": "32%",
  });

  var winnerName = winner.name;
  winnerName = winnerName.charAt(0).toUpperCase() + winnerName.slice(1);
  var winnerPic = winner.image;

  pokeWinner.text(winnerName + " wins!");
  winImg.attr("src", winnerPic);
  winImg.css({
    height: "200px",
    width: "200px",
  });

  winnerPokemon.append(pokeWinner);
  winnerPokemon.append(winImg);

  modal.css({
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.4)",
  });

  modal.append(winnerPokemon);
  $("body").append(modal);

  console.log(winner.name, " wins!");
}

//task 7:

//A game winner is determined when either side runs out of pokemon.
//If the user wins, they are presented with a congratulatory winning message (modal or new page) that tells them to go do something else using BoredAPI ("You totally rock at battling, how should go " + api input + " instead")
//If the user loses, they are presented with a loser message telling them to go do something else using BoredAPI (EX: "You suck at battling, how about you go " + api input + " instead" )
//along with the users win/lose message, they will be presented with a replay button which will restart the game.
function endGame() {}
