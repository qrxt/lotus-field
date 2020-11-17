const initialState = {
  result: { data: [] },
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

      result: { data: [] },
      loading: true,
      failure: false,
    },

    FOUND_CARDS_SUCCESS: {
      ...state.foundCards,

      result: action.payload,
      loading: false,
      failure: false,
    },

    FOUND_CARDS_FAILURE: {
      ...state.foundCards,

      result: { data: [] },
      loading: false,
      failure: true,
    },
  };

  return actionTypesMapping[action.type] || state.foundCards;
};

export { initialState };
