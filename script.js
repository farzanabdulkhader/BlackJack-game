let cards = []
sum = 0
message = ""
let isAlive = false
let gotBlackJack = false
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")

let player = {
    name: "Farzana",
    chips: 459
}
playerEl.textContent = player.name + ": $" + player.chips
messageEl.textContent = "Welcome"

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 13 + 1)
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function startGame() {
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    isAlive = true
    gotBlackJack = false
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()   
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum

   if ( sum === 21) {
        messageEl.textContent = "You've got Blackjack"
        gotBlackJack = true
   } else if ( sum < 21) {
        messageEl.textContent = "Do you like to pull another card?"
        isAlive = True
   } else {
        messageEl.textContent = "You're out of the game"
        isAlive = false
   }
}

function newCard() {
    if (gotBlackJack === false && isAlive === true) {
        let card = randomNumber()
        cards.push(card)
        sum += card
        renderGame() 
    }
}