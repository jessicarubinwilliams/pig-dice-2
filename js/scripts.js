function GameChest() {
  this.games = {}
  this.currentGameId = 0;
}

GameChest.prototype.assignId = function() {
  this.currentGameId += 1;
  return this.currentGameId;
}

GameChest.prototype.addGame = function(game) {
  game.id = this.assignId();
  this.games[game.id] = game;
}

function Game() {
  this.players = {};
  this.currentPlayerId = 0;
  this.isWon = false;
} 

Game.prototype.assignId = function() {
  this.currentPlayerId += 1;
  return this.currentPlayerId;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.roll = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Game.prototype.determineFirstPlayer = function() {
  if (this.players[1].determiningRoll === this.players[2].determiningRoll) {
    return false;
  }
  else if (this.players[1].determiningRoll > this.players[2].determiningRoll) {
    this.currentPlayer = 1;
  } else {
    this.currentPlayer = 2;
  }
}

Game.prototype.tallyTurnScore = function(player, roll) {
  if (roll === 1) {
    player.turnScore = 0;
    this.endTurn(player);
  } else {
    player.turnScore = roll;
  }
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
  let takeAnotherRoll = this.tallyTurnScore(player, this.roll());
  if (takeAnotherRoll === false) {
    this.endTurn();
  } else {
    this.winnerCheck(player);
  }
}

Game.prototype.findCurrentPlayer = function() {
  return this.players[this.currentPlayer];
}

Game.prototype.switchCurrentPlayer = function() {
  if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
}

Game.prototype.endTurn = function(player) {
  player.gameScore += player.turnScore;
  player.turnScore = 0;
  this.switchCurrentPlayer();
}

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = 0;
  this.isWinner = false;
}

Player.prototype.addDeterminingRoll = function(roll) {
  this.determiningRoll = roll
}

let gameChest = new GameChest();
$(document).ready(function() {
  $("#player-names-form").submit(function(event) {
    event.preventDefault();
    const player1Name = $("#player1-name").val();
    const player2Name = $("#player2-name").val();
    let game = new Game();
    gameChest.addGame(game);
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);
    game.addPlayer(player1);
    game.addPlayer(player2);
    console.log(gameChest);
    $("#who-goes-first").show();
    $("#welcome-view").hide();
    $("#player1Name").text(player1Name);
    $("#player2Name").text(player2Name);
  });
  $("#player1Rolls").submit(function(event) {
    event.preventDefault();
    player1Roll = gameChest.games[gameChest.currentGameId].roll();
    gameChest.games[gameChest.currentGameId].players[1].addDeterminingRoll(player1Roll);
    $("#player1RollOutput").append("<p class='mt-3'>Your rolled a " + player1Roll + "</p>");
  })
  $("#player2Rolls").submit(function(event) {
    event.preventDefault();
    player2Roll = gameChest.games[gameChest.currentGameId].roll();
    gameChest.games[gameChest.currentGameId].players[2].addDeterminingRoll(player2Roll);
    $("#player2RollOutput").append("<p class='mt-3'>Your rolled a " + player2Roll + "</p>");
  })
});

//Pseudo User Interface Logic
// let gameChest = new GameChest();
// console.log(gameChest);
// let game1 = new Game();
// gameChest.addGame(game1);
// console.log(gameChest);
// let player1 = new Player("Jamie");
// let player2 = new Player("Robin");
// game1.addPlayer(player1);
// game1.addPlayer(player2);
// player1.addDeterminingRoll(game1.roll());
// player2.addDeterminingRoll(game1.roll());
// console.log(game1);
// game1.determineFirstPlayer();
//need UIL such that if return of .determineFirstPlayer() is false players are alerted their rolls were the same and to roll again
// console.log(game1);
// let currentPlayer = game1.findCurrentPlayer();
// game1.takeTurn(currentPlayer);
// console.log(game1);
// console.log(currentPlayer);