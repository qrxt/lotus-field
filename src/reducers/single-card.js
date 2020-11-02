const initialState = {
  card: null,
  loading: true,
  failure: false,
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    FETCH_CARD_REQUEST: {
      card: null,
      loading: true,
      failure: false,
    },

    FETCH_CARD_SUCCESS: {
      card: action.payload,
      loading: false,
      failure: false,
    },

    FETCH_CARD_FAILURE: {
      card: null,
      loading: false,
      failure: true,
    },
  };

  return actionTypesMapping[action.type] || state.singleCard;
};

export { initialState };
