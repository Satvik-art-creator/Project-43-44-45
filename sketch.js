var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var distance;

var form, player, game;

var player1, player2;

var playerImg1, playerImg2;

var enemy1, enemyImg;

var players;

var bg1;

function preload(){
  bg1 = loadImage("Images/Level 1/bg2.png");

  playerImg1 = loadAnimation("Images/Robin/robinSword.png", "Images/Robin/robinHit.png","Images/Robin/robinStar.png","Images/Robin/robinHitStar.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.update(2);
    game.end();
  }
}
