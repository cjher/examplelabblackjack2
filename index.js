//
// Blackjack Game
//
// Array variable to hold a deck of cards
let cardDeck = [
  "Ace of Clubs",
  "2 of Clubs",
  "3 of Clubs"
];

// Variable to hold individual players" cards from the deck
let playerHand = [ cardDeck[0], cardDeck[2] ];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log("  " + playerHand[0]);
console.log("  " + playerHand[1]);
