let play_button = document.getElementById("play-button");
let leve_title = document.getElementById("level-title");
let buttonColours = ["red", "blue", "green", "yellow"];
let failer = document.getElementsByClassName("failer")[0];
let container = document.getElementsByClassName("container")[0];
let gamePattern = [];
let userClickedPattern = [];
let level = -1;

play_button.addEventListener("click", () => {
  container.classList.remove("invisible");
  failer.classList.add("invisible");  
  play_button.innerHTML = "Play";
  setTimeout(function () {
    nextSequence();
  }, 1000);
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  leve_title.innerText = "Level " + level;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
}

for (let i = 0; i < 4; i++) {
  document.getElementById(buttonColours[i]).addEventListener("click", select);
}

function select() {
  userClickedPattern.push(this.id);
  animatePress(this.id);
 check_pattern(userClickedPattern.length - 1);
}

function check_pattern(current) {
  if (userClickedPattern[current] == gamePattern[current]) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    leve_title.innerText = "Your Score is " + level;
    container.classList.add("invisible");
    failer.classList.remove("invisible");
    document.body.style.backgroundColor = "red";
    startOver();
    play_button.innerHTML = "Play Again";
    playSound("wrong");
  }
}

function animatePress(currentColor) {
  document.getElementById(currentColor).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(currentColor).classList.remove("pressed");
  }, 300);
}

function playSound(name) {
  let audio = new Audio("assets/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = -1;
  gamePattern = [];
  userClickedPattern = [];
}
