const initialState = {
  cardIds: [
    'c2089ec9-0665-448f-bfe9-d181de127814',
    'e9d5aee0-5963-41db-a22b-cfea40a967a3',
    'f03c5d53-4b23-47fa-850b-04e82fe173d9',
  ],
  cardsLoaded: [],
  loading: true,
  error: false,
};

const addRecent = (state, recent) => {
  const nextRecent = [
    recent,
    ...state.recentCards.cardIds,
  ];

  return {
    ...state.recentCards,

    cardIds: Array.from(new Set(nextRecent)),
  };
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    CARD_ADDED_TO_RECENT: addRecent(state, action.payload),

    FETCH_RECENT_CARDS_REQUEST: {
      ...state.recentCards,

      cardsLoaded: [],
      loading: true,
      error: false,
    },

    FETCH_RECENT_CARDS_SUCCESS: {
      ...state.recentCards,

      cardsLoaded: action.payload,
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
