
// Create an HTML page that contains a text area and a button labeled Create.

// When the user enters in text into the text area and then clicks the 
// create button, create a new card element in the DOM. You decide the height/width
// of the card.

// When the user clicks the Delete button, the containing card, and no other
// cards, should then be removed from the DOM. Not just made invisible, actually 
// removed from the DOM.

var cardData = document.getElementById("cardData");
var createButton = document.getElementById("create");
var cardContainer = document.getElementById("card_container");
var cardTemplate = `<div class="card"><div class="content"></div><button>Delete</button></div>`
var cardList = cardContainer.getElementsByClassName("content");

function createCard(textInput) {
	cardContainer.innerHTML += cardTemplate;
	var currentCard = cardList[cardList.length - 1];
	currentCard.innerHTML = textInput;
	console.log(this);
}

function handleCreateClickEvent() {
	var userInput = cardData.value;
	createCard(userInput);
}

createButton.addEventListener('click', handleCreateClickEvent);
