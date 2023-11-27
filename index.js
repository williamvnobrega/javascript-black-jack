let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let cardsEL = document.querySelector("#cards-el")
let sumEl = document.querySelector('#sum-el');
let message = "";

let messageEl = document.querySelector('#message-el');

function startGame(){
    renderGame();
}

function getRandomCard(){
    return 5;
}

function renderGame(){
    cardsEL.textContent = "Cards: "
    for(let i = 0; i<cards.length;i++){
        cardsEL.textContent += cards[i] + " "
    }

    if(sum<=20){
        message = "Do you want to draw a new card ? "
        
    }else if (sum === 21){
        message = "You've got blackjack !"
        
        hasBlackJack = true
    }else{
        message = "Oh no ! You're out the game"
        
        isAlive = false;
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum;
    
}

function newCard(){
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}