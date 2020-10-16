//DONE//task 1:
//start button starts game, hides current content, adds search bar and search button.

//DONE//task 2:
//the search button does an ajax call based on the user input.
//modal pops up showing pokemon name, image, type, attack stat, defense stat, a confirm button, and a cancel button.
//the user needs to pick 3 pokemon


$('#search-btn').on('click', function(){
  event.preventDefault();
  var userInput = $('#input').val();
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;
  


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log('response:', response)

    var pokeID = response.id;
    var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokeID + ".png";
    var name2 = response.name
    name2 = name2.charAt(0).toUpperCase() + name2.slice(1)
    $('#pokename').text(name2)
    $('#pokeimage').append('<div><img src=' + imageURL + '></div>')
    var type = response.types[0].type.name

    type = type.charAt(0).toUpperCase() + type.slice(1)
    $('#poketype').text(type + " type")

    $('#pokeattack').text("Attack stat: " + response.stats[1].base_stat)
    $('#pokedefense').text("Defense stat: " + response.stats[2].base_stat)
    $('#pokespeed').text("Speed stat: " + response.stats[5].base_stat)
    $('#pokeexp').text(response.base_experience)
    
    var userTeam = []
    var pokemoninfo = {}

    $('#add-button').on('click', function(){
    pokemoninfo = {name: response.name, type: response.types[0].type.name, attack: response.stats[1].base_stat, defense: response.stats[2].base_stat, speed: response.stats[5].base_stat, base_exp: response.base_experience, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokeID + ".png"}
    console.log('pokemoninfo:', pokemoninfo)
  
    $('#pokediv').remove();
  


})
    




});
});
//task 3:
//if add to team is clicked, current pokemon is added to team, clears image, stats/info, and search bar.
//if cancel is clicked, everything clears and does not add pokemon to team
//progress bar of some sort to show how many pokemon are left to choose.

//task 4:
//create an array which holds the AIs possible pokemon choices
//AFTER the user picks their 3 pokemon, the AI picks 3 pokemon randomly from the array
var compTeam = []
var compPokemon1 = $('<div>')
var compPokemon1Name = $('<p>')

function compTeamCreator() {
      
    for (var i = 0; i < 3; i++){
        randomCompPokemon()
        
    }
    
}

function randomCompPokemon () {
    var randomPokemon = Math.floor(Math.random()* Math.floor(892))   
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + randomPokemon
    var name = ''
    var attack = ''
    var defense = ''
    var speed = ''
    
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        name = response.forms[0].name;
        name = name.charAt(0).toUpperCase() + name.slice(1)
        console.log(name)
        speed = response.stats[5].base_stat;
        attack = response.stats[1].base_stat;
        defense = response.stats[2].base_stat;
        // var image = response.sprites.other.official-artwork[0]
    var compPokemon = {
        'pokemon' : name,
        'attack': attack,
        'defense': defense,
        'speed': speed,
    }  
    compTeam.push(compPokemon)
    console.log("test", compTeam)
    })

}

function teamSet(arr){
    compTeam = arr
    return compTeam
}


compTeamCreator()
//task 5:
//When battle starts, the users pokemon choices will show up on buttons with the pokemons image
//when the user clicks one of their pokemon choices, a modal it appears on the  "battlefield" div with the user choice pokemon and ai choice pokemon
//clicking the fight button will determine winner

//task 6:
//when fight button is clicked, a winner determined by:
  //the pokemon with the higher speed stat attacks first
  //if attacking pokemons attack stat > defending pokemons defense stat, it will ko it.
  //the pokemon with the lower speed will attack second in the same manner if it is not KO'd
  //if there is a tie (neither pokemon KO each other), the winner will be determined by whichever pokemon has the higher base experience stat.
  //when a pokemon is KO'd, both sides are able to pick a new pokemon (AI picks random from choices), the defeated pokemon will be removed from that teams choices. The winners pokemon is not removed.

//task 7:
  //A game winner is determined when either side runs out of pokemon.
  //If the user wins, they are presented with a congratulatory winning message (modal or new page) that tells them to go do something else using BoredAPI ("You totally rock at battling, how should go " + api input + " instead")
  //If the user loses, they are presented with a loser message telling them to go do something else using BoredAPI (EX: "You suck at battling, how about you go " + api input + " instead" )
  //along with the users win/lose message, they will be presented with a replay button which will restart the game.

  


