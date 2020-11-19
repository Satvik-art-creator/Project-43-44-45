class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.score = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    
    database.ref(playerIndex).set({
      name:this.name
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  // getCarAtEnd(){
  //   var getCarAtEndRef = database.ref('carsAtEnd');
  //   getCarAtEndRef.on("value",(data)=>{
  //     this.rank = data.val();
  //   })
  // }

  // static updateCarAtEnd(rank){
  //   database.ref('/').update({
  //     carsAtEnd: rank
  //   })
  // }
}
