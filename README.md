# Project-1

## User Story

AS a gamer, I WANT a simple Pokemon fighting game against the AI
THAT compares types, stats, and moves to determine a winner.

## Acceptance Criteria

WHEN I open the page, I will select 3 Pokemon by typing in Pokemon names.

WHEN I enter a Pokemon name, an image of the pokemon, stats, moves, and type appear.

THEN I will click a button to add the Pokemon to my team.

AFTER I pick my team, the AI will randomly pick 3 pokemon from the PokeAPI.

WHEN I click the start button, THEN the game will start.

WHEN the game starts, my first chosen pokemon will battle the AIs first chosen 
pokemon. 

WHEN the battle begins, I am presented with a set of buttons for the Pokemons moves.

AFTER I select a move, the AI will randomly select a move.

AFTER the user and AI and selected moves, the winner of that battle will be determined based on move picked and pokemon type.

THE winning pokemon stays in the game, and the losing pokemon is eliminated. Then the next pokemon in the eliminated pokemon's team is put into battle vs the previous winner.

THE first team (user or AI) to run out of pokemon loses.

AFTER the game is completed, the user will click an "end game" button. 

THEN the user will be given their total wins/loses via modal. This record will persist if the browser is closed or refreshed. (local storage)