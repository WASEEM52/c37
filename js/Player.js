class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playercount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playercount: count
    });
  }

update(){
  var playerIndex="players/player"+this.index
  database.ref(playerIndex).set({
    name:this.name,
   distance:this.distance
  })
 
}
  
static getPlayerinfo(){
  var playerinforef = database.ref("players")
  playerinforef.on("value",(data)=>{
    allplayers=data.val()
})
}
}

  