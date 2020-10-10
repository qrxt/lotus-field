export default (card) => ({
  ...card,
  cardFaces: card.cardFaces.map((face) => (
    { ...face, imageUris: card.imageUris }
  )),
});
