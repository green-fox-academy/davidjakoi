let cardDeck = [];

for (let i = 0; i < 52; i++) {
  cardDeck[i] = (Math.ceil(Math.random() * 52));
  console.log(cardDeck[i]);
}
