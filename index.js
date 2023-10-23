let play_button = document.getElementById("play-button");
let leve_title = document.getElementById("level-title");
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = -1;

play_button.addEventListener("click",()=> {
  document.body.style.backgroundColor ="black";
    play_button.classList.add("butt");
    document.getElementById("box").classList.remove("butt");
    document.getElementById("img").classList.add("butt");
    setTimeout(function(){
      nextSequence();
    },1000);
});
function nextSequence() {
  userClickedPattern = [];
  level++;
  leve_title.innerText = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
}
for ( let i = 0; i < 4; i++){
  document.getElementById(buttonColours[i]).addEventListener("click",select);
}

function select (){
  userClickedPattern.push(this.id);
  animatePress(this.id);
  let val  = check_pattern(userClickedPattern.length-1);
  if (val){
    
  }else{
    console.log("false");
  }
}
function check_pattern(current){
  if ( userClickedPattern[current] == gamePattern[current]){
    if ( userClickedPattern.length == gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else{
    leve_title.innerText = "Your Score is " + level;
    document.getElementById("img").classList.remove("butt");
    document.getElementById("box").classList.add("butt");
    document.body.style.backgroundColor = "red";
    startOver();
    play_button.innerHTML = "Play Again";
    play_button.classList.remove("butt");
    playSound("wrong");

  }
  
}


function animatePress(currentColor) {
  document.getElementById(currentColor).classList.add("pressed");
  setTimeout(function(){
    document.getElementById(currentColor).classList.remove("pressed");
  },300);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 3;
  gamePattern = [];
  userClickedPattern=[];
}
