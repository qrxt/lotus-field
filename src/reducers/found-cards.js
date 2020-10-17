const initialState = {
  cards: [],
  loading: true,
  failure: false,
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    FOUND_CARDS_REQUEST: {
      ...state.foundCards,

      cards: [],
      loading: true,
      failure: false,
    },

    FOUND_CARDS_SUCCESS: {
      ...state.foundCards,

      cards: action.payload,
      loading: false,
      failure: false,
    },

    FOUND_CARDS_FAILURE: {
      ...state.foundCards,

      cards: [],
      loading: false,
      failure: true,
    },
  };

  return actionTypesMapping[action.type] || state.foundCards;
};
