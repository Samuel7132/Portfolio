
let firstCard = getRandomCard ()
let secondCard = getRandomCard ()
let cards = [firstCard, secondCard] 
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard () {
  let randomNumber = Math.floor (Math.random() *13 ) +1
  return randomNumber
}



function startGame() {
  renderGame()
}
 
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum 
  if (sum <= 20) {
    message = "Do you want to draw a new card"
  } else if (sum === 21) {
     message = "You've got Balckjack"
    hasBlackJack = true
  } else  {
    message = "You've lost the Game"
    isAlive = false
  }
  messageEl.textContent = message
}  

function newCard() {
  console.log("Drawing a new card from the deck!")

let newCard = getRandomCard ()
sum += newCard
cards.push(newCard)
console.log(cards)
renderGame()
}


