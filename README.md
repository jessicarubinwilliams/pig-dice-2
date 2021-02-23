# _This project is not in a complete or portfolio ready state, and should not be considered representational of professional work._

# _Application Name_

#### _Brief description of application_

#### By _**Jessica R. Williams and Theron L. Packus**_

## Technologies Used

* _Bootstrap Library_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery Library_

## Description

_This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have. Balance between a summary of the project and a tame market pitch._

## Setup/Installation Requirements
>
* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/tlpackus/Pig-Dice.git>`_
* _Navigate to the top level of the repository with the command `$ cd Pig-Dice`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

_Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.] (tlpackus.github.io/Pig-Dice/index.html)_


## Tests

Describe: Player()
Test: "It will take a name argument and create Player instances with Name, GameScore, TurnScore, isWinner properties. The name argument will be the value of the Name property"
Expect(let player1 = new Player("Jamie")).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 0, isWinner: false });
Expect(let player2 = new Player("Robin")).toEqual(Player { name: "Robin", gameScore: 0, turnScore: 0, isWinner: false })


Describe: Player.prototype.tallyTurnScore(Player.prototype.roll())
Test: "It will assess player's roll. If a one is rolled it will end player's turn. If a two through six is rolled it will add value of roll to turnScore property value"
Expect(player1.tallyTurnScore(1)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 0, isWinner: false })
Expect(player1.tallyTurnScore(2)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 2, isWinner: false })
Expect(player1.tallyTurnScore(3)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 3, isWinner: false })
Expect(player1.tallyTurnScore(4)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 4, isWinner: false })
Expect(player1.tallyTurnScore(5)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 5, isWinner: false })
Expect(player1.tallyTurnScore(6)).toEqual(Player { name: "Jamie", gameScore: 0, turnScore: 6, isWinner: false })

Describe: Game()
Test: "It will create Game instances with Players, CurrentId, and CurrentPlayer properties"
Expect(let game1 = new Game()).toEqual(Game { Players: {}, currentId: 0, currentPlayer: 1, isWon: false});

Describe: Game.prototype.assignId
Test: "It will increment the currentId property and return the newly incremented value"
Expect(game1.assignId()).toEqual(Game { Players: {}, currentId: 1, currentPlayer: 1, isWon: false });
Expect(game1.assignId()).toEqual(return value = 1));

Describe: Game.prototype.addPlayer(player)
Test: "It will take a Player instance as an argument, call the assignID method, assign an id value to the Player instance, add the Player instance as a value of the Game's Player key"
Expect(game1.addPlayer(player1)).toEqual(Game { Players: { 1 { name: "Jamie", gameScore: 0, turnScore: 0, id: 1, isWinner: false } }, currentId: 1, currentPlayer: 1, isWon: false })
Expect(game1.addPlayer(player2)).toEqual(Game { Players: { 1 { name: "Jamie", gameScore: 0, turnScore: 0, id: 1, isWinner: false } , 2 { name: "Robin", gameScore: 0, turnScore: 0, id: 2, isWinner: false } }, currentId: 2, currentPlayer: 1, isWon: false })

Describe: Game.prototype.roll()
Test: "It will generate a random whole number between 1 and 6, inclusive"
Expect(player1.roll()).toEqual(1);
Expect(player1.roll()).toEqual(2);
Expect(player1.roll()).toEqual(3);
Expect(player1.roll()).toEqual(4);
Expect(player1.roll()).toEqual(5);
Expect(player1.roll()).toEqual(6);

Describe: Game.prototype.winnerCheck(player)
Test: "It will assess whether a Player's gameScore property value is greater than or equal to 100"
Expect(Game.winnerCheck(player1)).toEqual(false);

Describe: Game.prototype.takeTurn(player)
Test: "It will call player.tallyTurnScore, pass player.roll() as an argument, and call game.winnerCheck()"
Expect(game1.takeTurn(player1)).toEqual(Game { Players: { 1 { name: "Jamie", gameScore: 0, turnScore: 5, id: 1, isWinner: false } }, currentId: 1, currentPlayer: 1, isWon: false })

Describe: Game.prototype.findCurrentPlayer()
Test: "It will check the value of the currentPlayer property and return the player that has the matching id"
Expect(game1.findCurrentPlayer()).toEqual((Player { name: "Robin", gameScore: 0, turnScore: 0, id: 2, isWinner: false }))

Describe: Game.prototype.switchCurrentPlayer()
Test: "It will switch currentPlayer property value from 1 to 2 or from 2 to 1"
Expect(game1.switchCurrentPlayer()).toEqual(Game { Players: { 1 { name: "Jamie", gameScore: 0, turnScore: 5, id: 1, isWinner: false }, 2 { name: "Robin", gameScore: 0, turnScore: 0, id: 2, isWinner: false } }, currentId: 2, currentPlayer: 2, isWon: false })

Describe: Game.prototype.endTurn(player)
Test: "It will add a players turnScore to their gameScore, reset the turnScore to zero, and call the .switchCurrentPlayer() method"
Expect(game1.switchCurrentPlayer(player1)).toEqual(Game { Players: { 1 { name: "Jamie", gameScore: 5, turnScore: 0, id: 1, isWinner: false }, 2 { name: "Robin", gameScore: 0, turnScore: 0, id: 2, isWinner: false } }, currentId: 2, currentPlayer: 2, isWon: false })

## Known Bugs

* _Any known issues_
* _should go here_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**
## Contact Information
**_Theron L. Packus [mailto](mailto:tlpackus@gmail.com)_**
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
