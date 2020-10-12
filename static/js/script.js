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

//Challenge 5: Blackjack
let blackjackGame = {
  you: { scorespan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scorespan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "A", "Q", "K"],
  cardMaps: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
  wins: 0,
  loses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("static/sound/swish.mp3");
const loseSound = new Audio("static/sound/aww.mp3");
const winSound = new Audio("static/sound/Cha-ching-sound.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCards();
    showCard(card, YOU);
    updateScore(card, YOU);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    blackjackGame["turnsOver"] = false;
    let card = randomCards();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    await sleep(1000);
  }
  blackjackGame["turnsOver"] = true;
  let winner = computeWinner();
  showResult(winner);
}

function randomCards() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/image/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;
    let yourImage = document.querySelector("#your-box").querySelectorAll("img");
    let dealerImage = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");
    for (let i = 0; i < yourImage.length; i++) {
      yourImage[i].remove();
    }

    for (let i = 0; i < dealerImage.length; i++) {
      dealerImage[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = "white";

    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    document.querySelector("#blackjack-result").textContent = "Let's play!";
    document.querySelector("#blackjack-result").style.color = "black";

    blackjackGame["turnsOver"] = true;
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackGame["cardMaps"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardMaps"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardMaps"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardMaps"][card];
  }

  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scorespan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scorespan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scorespan"]).textContent =
      activePlayer["score"];
  }
}

function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
      blackjackGame["wins"]++;
    } else if (YOU["score"] < DEALER["score"]) {
      winner = DEALER;
      blackjackGame["loses"]++;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
    blackjackGame["loses"]++;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  return winner;
}

function showResult(winner) {
  if (blackjackGame["turnsOver"] === true) {
    let message, messageColor;
    if (winner === YOU) {
      message = "You won!";
      messageColor = "green";
      winSound.play();
      document.querySelector("#wins").textContent = blackjackGame["wins"];
    } else if (winner === DEALER) {
      message = "You lost!";
      messageColor = "red";
      loseSound.play();
      document.querySelector("#loses").textContent = blackjackGame["loses"];
    } else {
      message = "You drew!";
      messageColor = "yellow";
      document.querySelector("#draws").textContent = blackjackGame["draws"];
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}
