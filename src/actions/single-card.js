export const cardLoadSuccess = (card) => ({
  type: 'FETCH_CARD_SUCCESS',
  payload: card,
});

export const cardLoadRequest = () => ({
  type: 'FETCH_CARD_REQUEST',
});

export const cardLoadFailure = () => ({
  type: 'FETCH_CARD_FAILURE',
});

export const cardFetch = (dispatch, scryfallService) => (cardId) => {
  const fetchCardPromise = cardId === 'random'
    ? scryfallService.getRandomCard()
    : scryfallService.getCardById(cardId);

  const fetchRulingsPromise = fetchCardPromise
    .then(({ id }) => scryfallService.getRulingsByCard(id));

  const fetchPrintsPromise = fetchCardPromise
    .then(({ oracleId }) => {
      const queryString = `?order=released\u0026q=oracleid%3A${oracleId}\u0026unique=prints`;

      return scryfallService.searchCards(queryString);
    });

  dispatch(cardLoadRequest());
  return Promise.all([fetchCardPromise, fetchRulingsPromise, fetchPrintsPromise])
    .then(([card, rulings, prints]) => ({
      ...card,
      rulings,
      prints: prints.filter((print) => print.id !== card.id),
    }))
    .then((card) => dispatch(cardLoadSuccess(card)))
    .catch(() => {
      dispatch(cardLoadFailure());
    });
};
