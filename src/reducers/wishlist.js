const initialState = {
  cardIds: [
    'bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd',
  ],
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

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    CARD_ADDED_TO_WISHLIST: addToWishlist(state, action.payload),

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
