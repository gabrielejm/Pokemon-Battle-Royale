# Pokmon-Battle-Royale

A Pokémon battling game which allows the user to search for any 3 Pokémon (using the Pokémon's name or Pokédex ID) by using the PokéAPI, then battles a randomly selected AI team. When a Pokémon is searched for, this app will return the Pokémon's name, image, and stats and will be added the Pokémon to the user's team when the "Add to Team" button is clicked.
A winner is determined when either the user or the AI has run out of Pokémon!
In order to determine a winner, this app compares the Pokémon's speed, attack, defense, and base experience stats. Each Pokémon will have 1 turn to attack, and the Pokémon with the highest speed stat attacks first. If the attacking Pokémon's attack stat is higher than the defending Pokémon's defense stat, then the defending Pokémon is knocked out. If the first attacking Pokémon does not knock out the defender, the roles will swap (the attacker is now the defender and vice versa). When a Pokémon is knocked out, the next Pokémon in line comes into battle and the winner Pokémon stays in battle. If neither Pokémon knocks out the other out in 1 attack turn, a tie-breaker is initiated by comparing the base experience stat; the highest wins.

When the game is over, the user is presented with a win or loss screen. Clicking the "Finish" button will bring the user to the "Game Over" screen. On the "Game Over" screen, the BoredAPI is utilized by generating and displaying a new random activity for the user to do!
The user also has the option to play again by clicking the "Play again" link!

Contributors: Conor Mckoy, Dairon Ferrer, Waleed McLean, Justin Gabriele

Github repo: https://github.com/gabrielejm/Pokmon-Battle-Royale

Deployed app: https://gabrielejm.github.io/Pokmon-Battle-Royale/

![pokemon1](https://user-images.githubusercontent.com/63600183/97735610-edbbb480-1ab0-11eb-85d2-43dd5da58ed5.PNG)

![pokemon2](https://user-images.githubusercontent.com/63600183/97735665-fdd39400-1ab0-11eb-9e77-72a5426d9480.PNG)

![pokemon3](https://user-images.githubusercontent.com/63600183/97735687-04faa200-1ab1-11eb-946e-3f4f089cfae1.PNG)
