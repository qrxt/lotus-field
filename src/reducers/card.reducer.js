const initialState = {
  card: null,
  loading: true,
  failure: false,
};

export default (state = initialState, action) => {
  const actionTypesMapping = {
    FETCH_CARD_REQUEST: {
      ...state,

      card: null,
      loading: true,
      failure: false,
    },

    FETCH_CARD_SUCCESS: {
      ...state,

      card: action.payload,
      loading: false,
      failure: false,
    },

    FETCH_CARD_FAILURE: {
      ...state,

      card: null,
      loading: false,
      failure: true,
    },
  };

  return actionTypesMapping[action.type] || state;
};
