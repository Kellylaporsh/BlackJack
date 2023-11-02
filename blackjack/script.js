 document.getElementById("startBtn").addEventListener("click", startGame)
document.getElementById("newBtn").addEventListener("click", newCard)

let player = {
    name: "Kelly",
    chips: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message")
let cardEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

let playerEL = document.getElementById("player")
 
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 11) + 1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
} 


function renderGame(){
    cardEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card"
    } else if (sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }

}




/*let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let cardEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let messageEl= document.getElementById("message")
let message = " "
let randomNumber = getRandomNumber()

document.getElementById("startBtn").addEventListener("click", startGame)
document.getElementById("newBtn").addEventListener("click", newCard)

function getRandomNumber(){
    return Math.floor(Math.random()*11) + 1
}

function renderGame(){
    startGame()
}

function startGame(){
    cardEl.textContent = "Cards: " 

    for(let i = 0; i < cards.length; i++ ){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21){
        message = "Draw a new card"
        messageEl.textContent = message
    } else if (sum === 21){
        message = "You've got Blackjack"
        messageEl.textContent = message
    } else {
        message = "You're out of the game"
        messageEl.textContent = message
    }
}

function newCard(){
    let card = getRandomNumber()
    sum += card
    cards.push(card)
    renderGame()
}*/

