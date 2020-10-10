const initialState = {
  cardIds: [
    'c2089ec9-0665-448f-bfe9-d181de127814',
  ],
  cardsLoaded: [],
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    CARD_ADDED_TO_RECENT: {
      cardIds: [...state.recentCards.cardIds, action.payload],
    },
  };

  return actionTypesMapping[action.type] || state.recentCards;
};
