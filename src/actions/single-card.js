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
    .then((fetchedCard) => scryfallService.getRulingsByCard(fetchedCard.id));

  dispatch(cardLoadRequest());
  return Promise.all([fetchCardPromise, fetchRulingsPromise])
    .then(([card, rulings]) => ({
      ...card,
      rulings,
    }))
    .then((card) => dispatch(cardLoadSuccess(card)))
    .catch(() => {
      dispatch(cardLoadFailure());
    });
};
