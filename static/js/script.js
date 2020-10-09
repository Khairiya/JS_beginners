// challenge 1 = age in days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var theMaths = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "Your are " + theMaths + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2 = image generator

function generateImg() {
  var image = document.createElement("img");
  var div = document.getElementById("imgGen");
  image.src = "static/image/rash.jpg";
  div.appendChild(image);
}

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log(humanChoice);
  botChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //the
  console.log(botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);

  var message = finalWinner(result);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

/* Another way to the botChoice
    You first create 2 functions. 1 for creating random numbers and one for creating an array of the list of items
    function randInt(){
        return Math.floor(Math.random() *3)
    }

    function numberToChoice(number){
        return ['rock', 'paper', 'scissors'][number]
    }

    botChoice = numberToChoice(randInt())  this means that, when the randInt function generates a number, it is parsed into the numberToChoice function which indexes the item in the array
*/

//Now we write a function to decide the winner

function decideWinner(yourChoice, computer) {
  var rpsData = {
    rock: { paper: 0, rock: 0.5, scissors: 1 },
    paper: { scissors: 0, paper: 0.5, rock: 1 },
    scissors: { rock: 0, scissors: 0.5, paper: 1 },
  };

  var yourScore = rpsData[yourChoice][computer];
  var computerScore = rpsData[computer][yourChoice];

  return [yourScore, computerScore];
}

function finalWinner([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "Draw!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontEnd(yourImg, computerImg, message) {
  var rpsImgData = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var yourDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  yourDiv.innerHTML =
    "<img src='" +
    rpsImgData[yourImg] +
    "' height=150 width=150 style='box-shadow: 0px 10px 10px rgb(24, 59, 256, 1); margin:10px;' >";

  messageDiv.innerHTML =
    "<h1 style='color:" +
    message["color"] +
    "; font-size: 60px; padding:30px;'>" +
    message["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    rpsImgData[computerImg] +
    "' height=150 width=150 style='box-shadow: 0px 10px 10px rgb(256, 59, 24, 1); margin:10px;'>";

  document.getElementById("flex-box-rps-div").appendChild(yourDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//challenge 4: change the colors of all button

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value == "reset") {
    buttonsReset();
  } else if (buttonThingy.value == "random") {
    buttonsRandom();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function buttonsRandom() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
