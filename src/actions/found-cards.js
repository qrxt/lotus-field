export const foundCardsLoadRequest = () => ({
  type: 'FOUND_CARDS_REQUEST',
});

export const foundCardsLoadFailure = () => ({
  type: 'FOUND_CARDS_FAILURE',
});

export const foundCardsLoadSuccess = (result) => ({
  type: 'FOUND_CARDS_SUCCESS',
  payload: result,
});

export const findCards = (dispatch, scryfallService) => (queryString) => {
  dispatch(foundCardsLoadRequest());

  return scryfallService.searchCards(queryString)
    .then((result) => dispatch(foundCardsLoadSuccess(result)))
    .catch(() => dispatch(foundCardsLoadFailure()));
};
