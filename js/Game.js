class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hideobjects();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerinfo()
  
   if(allplayers!==undefined){
     
    var display_position=200
    for(var plr in allplayers){
       console.log(plr);
     if(plr==="player" + player.index)
     fill("red")
     else
     fill("black")
     display_position +=20
     textSize(15)
     text (allplayers[plr].name+":"+allplayers[plr].distance,160,display_position)
   
   }
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
  player.distance+=50
  player.update()
}
}
}