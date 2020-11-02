export const cardAddedToRecent = (cardId) => ({
  type: 'CARD_ADDED_TO_RECENT',
  payload: cardId,
});

export const recentCardsLoadFailure = () => ({
  type: 'FETCH_RECENT_CARDS_FAILURE',
});

export const recentCardsLoadRequest = () => ({
  type: 'FETCH_RECENT_CARDS_REQUEST',
});

export const recentCardsLoadSuccess = (cards) => ({
  type: 'FETCH_RECENT_CARDS_SUCCESS',
  payload: cards,
});

export const recentCardsFetch = (dispatch, scryfallService) => (idList) => {
  dispatch(recentCardsLoadRequest());

  return scryfallService.getCardsByIdList(idList)
    .then((cards) => dispatch(recentCardsLoadSuccess(cards)))
    .catch(() => dispatch(recentCardsLoadFailure()));
};
