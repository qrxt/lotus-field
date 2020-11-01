// actions
import {
  foundCardsLoadRequest,
  foundCardsLoadSuccess,
  foundCardsLoadFailure,
} from '@actions/found-cards';

// reducer
import foundCards, { initialState } from './found-cards';

describe('Found Cards Reducer', () => {
  test('should return initial state', () => {
    expect(foundCards(null)).toEqual(initialState);
  });

  test('should handle FOUND_CARDS_REQUEST', () => {
    const state = foundCards({ foundCards: initialState }, foundCardsLoadRequest());

    expect(state.cards).toEqual([]);
    expect(state.loading).toBeTruthy();
    expect(state.failure).toBeFalsy();
  });

  test('should handle FOUND_CARDS_FAILURE', () => {
    const state = foundCards({ foundCards: initialState }, foundCardsLoadFailure());

    expect(state.cards).toEqual([]);
    expect(state.loading).toBeFalsy();
    expect(state.failure).toBeTruthy();
  });

  test('should handle FOUND_CARDS_SUCCESS', () => {
    const cards = ['card', 'card'];

    const state = foundCards(
      { foundCards: initialState },
      foundCardsLoadSuccess(cards),
    );

    expect(state.cards).toEqual(cards);
    expect(state.loading).toBeFalsy();
    expect(state.failure).toBeFalsy();
  });
});
