# Pokemon-Battle-Royale

## User Story

AS a gamer, I WANT a simple Pokemon fighting game against the AI
THAT compares types, stats, and moves to determine a winner.

## Acceptance Criteria

WHEN I open the page, the user will be presented with a start or give up button.

WHEN I start the game, the user can search and select 3 pokemon. When a pokemon is searched, its name, image, attack/defense/speed stats, and type appear.

THEN I will click a button to add the Pokemon to my team.

WHEN I add a pokemon to my team, the progress bar will fill 1/3.

AFTER I pick my team, the AI will randomly pick 3 pokemon from the PokeAPI.

WHEN I click the start button, THEN the game will start.

WHEN the game starts, the users first chosen pokemon will battle the AIs first chosen
pokemon.

WHEN the battle begins, the winning pokemon is determined by comparing speed, attack, and defense stats .

THE winning pokemon stays in the game, and the losing pokemon is eliminated. Both sides are able to pick a pokemon for the next battle from their remaining pokemon.

THE first team (user or AI) to run out of pokemon loses.

AFTER the game is completed, the user will click an "end game" button.

WHETHER or not the user wins or loses, they will receive a message from BoredAPI telling them to go do something else.

THEN the user will be given their total wins/loses via modal. This record will persist if the browser is closed or refreshed (local storage).

WHEN the modal is closed, a "replay" button will appear which the user can click to play again.

## APIs used:

PokeAPI: https://pokeapi.co/

BoredAPI: https://www.boredapi.com/?ref=public-apis

## Github repo and Github pages links:

Github pages: https://gabrielejm.github.io/Pokemon-Battle-Royale/

Github repo: https://github.com/gabrielejm/Pokemon-Battle-Royale
