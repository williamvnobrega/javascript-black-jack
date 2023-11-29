let player = {
    name:"Will",
    chips:999
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let cardsEL = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");
let message = "";
let messageEl = document.querySelector("#message-el");

playerEl.textContent = player.name +": $"+ player.chips;


function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) return 10;
  else if (randomCard === 1) return 11;
  else return randomCard;
}

function renderGame() {
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card ? ";
  } else if (sum === 21) {
    message = "You've got blackjack !";

    hasBlackJack = true;
  } else {
    message = "Oh no ! You're out the game";

    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
 if(isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
 }
  
}
