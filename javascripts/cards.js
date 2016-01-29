
// Create an HTML page that contains a text area and a button labeled Create.

// When the user enters in text into the text area and then clicks the 
// create button, create a new card element in the DOM. You decide the height/width
// of the card.

// When the user clicks the Delete button, the containing card, and no other
// cards, should then be removed from the DOM. Not just made invisible, actually 
// removed from the DOM.

var createButton = document.getElementsByTagName("button")[0];
var cardContainer = document.getElementById("card_container");
var cardTemplate = `<div class="card"><div class="content"></div><button>Delete</button></div>`
var userInput = "";

cardContainer.innerHTML += cardTemplate;
cardContainer.getElementsByClassName("content")[0].innerHTML = "Testing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem non veniam, nam quisquam aliquid maxime quia! Doloribus dolore unde, nisi nihil quaerat, consectetur rerum modi sint, repudiandae laborum delectus ullam.";

cardContainer.innerHTML += cardTemplate;
cardContainer.getElementsByClassName("content")[1].innerHTML = "Testing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem non veniam, nam quisquam aliquid maxime quia! Doloribus dolore unde, nisi nihil quaerat, consectetur rerum modi sint, repudiandae laborum delectus ullam.";
