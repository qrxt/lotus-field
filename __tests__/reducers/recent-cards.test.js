// actions
import {
  cardAddedToRecent,
  recentCardsLoadRequest,
  recentCardsLoadSuccess,
  recentCardsLoadFailure,
} from '@actions/recent-cards';

// reducer
import recentCards, { initialState } from '@reducers/recent-cards';

describe('Recent Cards Reducer', () => {
  test('should return initial state', () => {
    expect(recentCards(null)).toEqual(initialState);
  });

  test('should handle CARD_ADDED_TO_RECENT', () => {
    const testId = 'card test id';

    // should add recent ids to start of cardIds array
    expect(recentCards({ recentCards: initialState }, cardAddedToRecent(testId)))
      .toEqual({
        ...initialState,
        cardIds: [
          testId,
          ...initialState.cardIds,
        ],
      });
  });

  test('should handle FETCH_RECENT_CARDS_REQUEST', () => {
    const state = recentCards({ recentCards: initialState }, recentCardsLoadRequest());

    expect(state.cardsLoaded).toEqual([]);
    expect(state.loading).toBeTruthy();
    expect(state.error).toBeFalsy();
  });

  test('should handle FETCH_RECENT_CARDS_FAILURE', () => {
    const state = recentCards({ recentCards: initialState }, recentCardsLoadFailure());

    expect(state.cardsLoaded).toEqual([]);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeTruthy();
  });

  test('should handle FETCH_RECENT_CARDS_SUCCESS', () => {
    const cards = ['card', 'card'];

    const state = recentCards(
      { recentCards: initialState },
      recentCardsLoadSuccess(cards),
    );

    expect(state.cardsLoaded).toEqual(cards);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeFalsy();
  });
});
