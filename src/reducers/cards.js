// const initialState = {
//   cardIds: [
//     'c2089ec9-0665-448f-bfe9-d181de127814',
//   ],
//   cardsLoaded: [],
//   loading: true,
//   error: false,
// };

// const updateRecentCards = (state, recent) => {
//   const nextRecent = [
//     ...state.recentCards.cardIds, recent,
//   ];

//   console.log(nextRecent);

//   return {
//     ...state.recentCards,

//     cardIds: Array.from(new Set(nextRecent)),
//   };
// };

// export default (state, action) => {
//   if (!state) {
//     return initialState;
//   }

//   const actionTypesMapping = {
//     CARD_ADDED_TO_RECENT: updateRecentCards(state, action.payload),

//     FETCH_CARDS_REQUEST: {
//       ...state.recentCards,

//       cardsLoaded: [],
//       loading: true,
//       error: false,
//     },

//     FETCH_CARDS_SUCCESS: {
//       ...state.recentCards,

//       cardsLoaded: action.payload || [],
//       loading: false,
//       error: false,
//     },

//     FETCH_CARDS_FAILURE: {
//       ...state.recentCards,

//       cardsLoaded: [],
//       loading: false,
//       error: true,
//     },
//   };

//   return actionTypesMapping[action.type] || state.recentCards;
// };
