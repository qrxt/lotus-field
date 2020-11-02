export const foundCardsLoadRequest = () => ({
  type: 'FOUND_CARDS_REQUEST',
});

export const foundCardsLoadFailure = () => ({
  type: 'FOUND_CARDS_FAILURE',
});

export const foundCardsLoadSuccess = (cards) => ({
  type: 'FOUND_CARDS_SUCCESS',
  payload: cards,
});

export const findCards = (dispatch, scryfallService) => (queryString) => {
  dispatch(foundCardsLoadRequest());

  return scryfallService.searchCards(queryString)
    .then((cards) => dispatch(foundCardsLoadSuccess(cards)))
    .catch(() => dispatch(foundCardsLoadFailure()));
};
