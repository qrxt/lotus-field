const initialState = {
  card: null,
};

export default (state = initialState, action) => {
  const actionTypesMapping = {
    CARD_LOADED: {
      card: action.payload,
    },
  };

  return actionTypesMapping[action.type] || state;
};
