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