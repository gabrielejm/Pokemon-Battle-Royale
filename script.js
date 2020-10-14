//task 1:
//start button starts game, hides current content, adds search bar and search button.

//task 2:
//the search button does an ajax call based on the user input.
//modal pops up showing pokemon name, image, type, attack stat, defense stat, a confirm button, and a cancel button.
//the user needs to pick 3 pokemon
//cancel button closes modal, allows user to search more, will not add pokemon to team
$('#searchbuttonid').on('click', function(){
  event.preventDefault();
  var userInput = $('#inputboxid').val();
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;
  

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var pokeID = response.held_items.id;
    var imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokeID + ".png";
    $('#pokemonNameId')
    $('#pokemonImageId')
    $('#pokemonTypeId')
    $('#attackStatId')
    $('#defenseStatId')
    




});
});
//task 3:
//if confirm is clicked, current pokemon is added to team, modal closes, takes user back to search bar.
//progress bar of some sort to show how many pokemon are left to choose.

//task 4:
//create an array which holds the AIs possible pokemon choices
//AFTER the user picks their 3 pokemon, the AI picks 3 pokemon randomly from the array

//task 5:
//When battle starts, the users pokemon choices will show up on buttons with the pokemons image
//when the user clicks one of their pokemon choices, a modal appears as the "battlefield" with the user choice pokemon and ai choice pokemon
//the modal should have a "fight" button

//task 6:
//when fight button is clicked, a winner determined by:
  //the pokemon with the higher speed stat attacks first
  //if the attacking pokemons attack stat is higher than the defending pokemons defense stat, it will KO the defending pokemon.
  //if the attacking attack stat is lower thean the defending pokemons defense stat, it will not KO it.
  //the pokemon with the lower speed will attack second in the same manner if it is not KO'd
  //if there is a tie (neither pokemon KO each other), the winner will be determined by whichever pokemon has the higher base experience stat.
  //when a pokemon is KO'd, both sides are able to pick a new pokemon (AI picks random from choices), the defeated pokemon will be removed from that users choices. The winners pokemon is not removed.

//task 7:
  //A game winner is determined when either side runs out of pokemon.
  //If the user wins, they are presented with a congratulatory winning message (modal or new page) that tells them to go do something else using BoredAPI ("You totally rock at battling, how should go " + api input + " instead")
  //If the user loses, they are presented with a loser message telling them to go do something else using BoredAPI (EX: "You suck at battling, how about you go " + api input + " instead" )
  //along with the users win/lose message, they will be presented with a replay button which will restart the game.

  //extra comment


