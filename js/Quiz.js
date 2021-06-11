class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

 play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("yellow")
    //write code to show a heading for showing the result of Quiz
fill(0);
text("Result of the Quiz",340,50)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()
fill("Blue");
text("*Note - Text in green letter is correct*",130,230)
    //write condition to check if contestantInfor is not undefined
if(allContestants!=undefined){
  var display_answer=230
  for(var plr in allContestants){
    var ans="2";
    if(ans===allContestants[plr].answer){
     fill("green")
    }else{
    fill("red")
  }
 display_answer+=30
  text(allContestants[plr].name + ":  " + allContestants[plr].answer,200,display_answer)
}
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    
  }

 }
}
