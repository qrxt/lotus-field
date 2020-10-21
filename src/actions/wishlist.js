export const cardAddedToWishlist = (cardId) => ({
  type: 'CARD_ADDED_TO_WISHLIST',
  payload: cardId,
});

export const cardRemovedFromWishlist = (cardId) => ({
  type: 'CARD_REMOVED_FROM_WISHLIST',
  payload: cardId,
});

export const wishlistLoadFailure = () => ({
  type: 'FETCH_WISHLIST_CARDS_FAILURE',
});

export const wishlistLoadRequest = () => ({
  type: 'FETCH_WISHLIST_CARDS_REQUEST',
});

export const wishlistLoadSuccess = (cards) => ({
  type: 'FETCH_WISHLIST_CARDS_SUCCESS',
  payload: cards,
});

export const wishlistFetch = (dispatch, scryfallService) => (idList) => {
  dispatch(wishlistLoadRequest());
  scryfallService.getCardsByIdList(idList)
    .then((cards) => {
      dispatch(wishlistLoadSuccess(cards));
    })
    .catch(() => dispatch(wishlistLoadFailure()));
};
