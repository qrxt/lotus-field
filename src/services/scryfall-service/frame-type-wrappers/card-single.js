export default (card) => ({
  ...card,
  cardFaces: [
    {
      name: card.name,
      typeLine: card.typeLine,
      oracleText: card.oracleText,
      flavorText: card.flavorText,
      manaCost: card.manaCost,
      imageUris: card.imageUris,
      toughness: card.toughness,
      power: card.power,
    },
  ],
});
