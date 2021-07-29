"Use strict";

// Selecting dices

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

// Selecting the message (h1)

let message = document.querySelector(".message");

// Generating numbers

let diceOneNumber = Math.trunc(Math.random() * 5 + 1);
let diceTwoNumber = Math.trunc(Math.random() * 5 + 1);

// Assigning values to dices

dice1.src = `images/dice${diceOneNumber}.png`;
dice2.src = `images/dice${diceTwoNumber}.png`;

// Decision making for winner, looser and draw

if (diceOneNumber == diceTwoNumber) {
  message.textContent = "Draw";
} else if (diceOneNumber > diceTwoNumber) {
  message.textContent = "🚩 Player 1 Wins!";
} else if (diceOneNumber < diceTwoNumber) {
  message.textContent = "Player 2 Wins! 🚩";
}
