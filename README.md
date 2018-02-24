# Pig Dice

#### A webpage where you can play pig dice with another player or a computer 23.02.2018

#### By **Slavcho Mitrov**

## Description

A webpage created with HTML, CSS and JavaScript where the user can play a game of pig dice with another user or with the computer. The computer mode also offers easy and hard difficulties. The player that scores 100 points or above, wins the game.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **If the player rolls a 1, they score nothing and it becomes the next player's turn** | 1 | 'Player 2's turn' |
| **If the player rolls any other number, it is added to their turn total and the player's turn continues** | 3 | Turn total: 3 |
| **If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn**| click 'hold' button |  'Other player's turn' |
| **When two dice are rolled, if neither shows a 1, their sum is added to the turn total.**| 2 and 3 |  'Turn total: 5' |
| **When two dice are rolled, If a single 1 is rolled, the player scores nothing and the turn ends.**| 2 and 1 |  'Turn total: 0' |
| **When two dice are rolled, If two 1s are rolled, the player’s entire score is lost1 and the turn ends.**| 1 and 1 |  'Turn total: 0' 'Score: 0' |
| **If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again**| 3 and 3 |  'Turn total: 6' Roll again |

## Setup/Installation Requirements

* To open the webpage in your browser visit this [link](https://jombastic.github.io/pig-dice/)
* To download the code click **clone or download** button on Github or enter the command "git clone https://github.com/jombastic/pig-dice" in your shell

## Known Bugs

* When playing vs Computer:
  * When the computer finishes rolling normally without breaking the process, its score is not showed at the moment, but afterwards when it rolls a second time.
  * During the time the computer rolls, instead for the user's **roll** and **hold** buttons to be disabled, they are usable.
  * When the user rolls a 1 in either case, it is so fast that it's not even visible and the computer rolls immediately. 

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Slavcho Mitrov}_**
