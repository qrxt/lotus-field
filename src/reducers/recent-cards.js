const initialState = {
  cardIds: [
    'c2089ec9-0665-448f-bfe9-d181de127814',
  ],
  cardsLoaded: [],
  loading: true,
  error: false,
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  console.log(state, action);

  const actionTypesMapping = {
    CARD_ADDED_TO_RECENT: {
      ...state.recentCards,

      cardIds: [
        ...state.recentCards.cardIds, action.payload,
      ],
    },

    FETCH_RECENT_CARDS_REQUEST: {
      ...state.recentCards,

      cardsLoaded: [],
      loading: true,
      error: false,
    },

    FETCH_RECENT_CARDS_SUCCESS: {
      ...state.recentCards,

      cardsLoaded: action.payload || [],
      loading: false,
      error: false,
    },

    FETCH_RECENT_CARDS_FAILURE: {
      ...state.recentCards,

      cardsLoaded: [],
      loading: false,
      error: true,
    },
  };

  return actionTypesMapping[action.type] || state.recentCards;
};
