const initialState = {
  cardIds: [],
  cardsLoaded: [],
  loading: true,
  error: false,
};

const addToWishlist = (state, card) => {
  const nextWishlist = [
    card,
    ...state.wishlist.cardIds,
  ];

  return {
    ...state.wishlist,

    cardIds: Array.from(new Set(nextWishlist)),
  };
};

const removeFromWishlist = (state, cardId) => {
  const nextWishlist = state.wishlist.cardIds
    .filter((currentCardId) => currentCardId !== cardId);

  return {
    ...state.wishlist,

    cardIds: nextWishlist,
  };
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    CARD_ADDED_TO_WISHLIST: addToWishlist(state, action.payload),
    CARD_REMOVED_FROM_WISHLIST: removeFromWishlist(state, action.payload),

    FETCH_WISHLIST_CARDS_REQUEST: {
      ...state.wishlist,

      cardsLoaded: [],
      loading: true,
      error: false,
    },

    FETCH_WISHLIST_CARDS_SUCCESS: {
      ...state.wishlist,

      cardsLoaded: action.payload,
      loading: false,
      error: false,
    },

    FETCH_WISHLIST_CARDS_FAILURE: {
      ...state.wishlist,

      cardsLoaded: [],
      loading: false,
      error: true,
    },
  };

  return actionTypesMapping[action.type] || state.wishlist;
};
