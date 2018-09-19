
//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardFour);

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[2];
cardsInPlay.push(cardOne);{
  console.log("user flipped queen");
}

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);{
  console.log("user flipped king");
}

if(cardsInPlay.length === 2) {
} if (cardsInPlay[0] === cardsInPlay[1]){
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
