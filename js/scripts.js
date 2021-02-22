function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
} 

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.takeTurn = function(player) {
  player.tallyTurnScore(player.roll());
  player.winnerCheck();
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

Player.prototype.winnerCheck = function() {
  if (this.gameScore >= 100) {
    return this.isWinner = true;
  }
}

Player.prototype.tallyTurnScore = function(roll) {
  if (roll === 1) {
    this.switchCurrentPlayer();
  } else {
    this.turnScore = roll;
  }
}

// Player.prototype.switchCurrentPlayer = function() {
  
// }



//Pseudo User Interface Logic
let game1 = new Game();
let player1 = new Player("Jamie");
game1.addPlayer(player1);
game1.takeTurn(player1);
console.log(player1);