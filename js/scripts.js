function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
  this.isWon = false;
} 

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.winnerCheck = function(player) {
  if (player.gameScore >= 100) {
    player.isWinner = true;
    return this.isWon = true;
  } else {
    return false;
  }
}

Game.prototype.takeTurn = function(player) {
  let takeAnotherRoll = player.tallyTurnScore(player.roll());
  if (takeAnotherRoll === false) {
    this.endTurn();
  } else {
    this.winnerCheck(player);
  }
}

// Game.prototype.switchCurrentPlayer = function() {
  
// }

Game.prototype.endTurn = function(player) {
  console.log("End Turn");
}



function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
  this.isWinner = false;
}

Player.prototype.roll = function() {
  return Math.floor((Math.random() * 6) + 1);
}


Player.prototype.tallyTurnScore = function(roll) {
  if (roll === 1) {
    this.turnScore = 0;
    return false;
  } else {
    this.turnScore = roll;
  }
}



//Pseudo User Interface Logic
let game1 = new Game();
let player1 = new Player("Jamie");
let player2 = new Player("Robin");
game1.addPlayer(player1);
game1.addPlayer(player2)
// let currentPlayer = "player" + [game1.currentPlayer];
// game1.takeTurn(currentPlayer);
// console.log(currentPlayer);