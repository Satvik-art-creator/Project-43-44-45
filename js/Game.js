class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200);
    player1.addAnimation("hitAnimation", playerImg1);

    player2 = createSprite(300,200);

    players = [player1, player2];
  }

  play(){
    form.hide();

    background(bg1);
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){    
      //index of the array
      var index = 0;

      //x and y position of the players
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;

        //use data form the database to display the cars in y direction
        y = displayHeight - 150;
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }
      }

    }

    // if(keyDown("UP")){
    //   player.distance +=10
    //   player.update();
    // }

    if(keyDown("RIGHT") && player.index !== null){
      player.distance +=10
      player.update();
    }

    // if(player.distance > 3860){
    //   gameState = 2;

    //   player.rank += 1;
    //   Player.updateCarAtEnd(player.rank);
    //   alert("Rank of " + player.name +  " is: " + player.rank, displayWidth/2, y-150);
    // }
   
    drawSprites();
  }

  end(){
    // console.log("Game Ended");

    // var message = createElement("h2");
    // message.html("Congratulations! " + player.name + ". Your Rank is " + player.rank + ".");
    // message.position(displayWidth/2,displayHeight/4);
  }
}
