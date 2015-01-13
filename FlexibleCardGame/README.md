# Flexible Card Game Kata

Description:
### Create any card game!

Create a Card Game library of classes which could be used to create any number of basic card games. You'll need at least a `Deck` class and a `Card` class.

### Deck functionality

A deck has a public attribute:

`cards`: array of remaining cards in the deck.

...and three public methods:

`count()`: count of remaining cards in the deck.

`shuffle()`: randomize the order of the remaining cards in the deck.

`draw(n)`: remove the last `n` cards from the deck and return them in an array.

Upon initialization, a deck is filled with 52 cards (13 from each of 4 suits).

### Card functionality

A card has these public attributes:

* `suit`: a symbol representing the suit of the card.

* `rank`: an integer from 1 to 13. ("ace" is 1, "king" is 13)

* __Javascript__: `face_card`: is this card a face card? (> 10)

...and these methods:

* __Ruby__: `face_card?`: is this card a face card? (> 10)

* `to_s` (__JS__:`toString()`) : human-readable string representation of the card (e.g. "Ace of Spades", "10 of Clubs", "Queen of Hearts")


Cards must be `Comparable` to other cards. Compare the ranks of the cards only.

Since this is a low level layer to build card games above, all test input will be valid. All ranks will be between 1 and 13 and all suits will be one of 


* __Ruby__: `:hearts`, `:diamonds`, `:spades`, `:clubs`
* __Javascript__: `Card.HEARTS`, `Card.DIAMONDS`, `Card.CLUBS`, `Card.SPADES`

Tags: Fundamentals` `Object-oriented Programming` `Classes` `Basic Language Features`

Source [here](http://www.codewars.com/kata/flexible-card-game)

A [Similar](http://www.codewars.com/kata/simple-card-game) one can be found here