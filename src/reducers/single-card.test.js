// actions
import {
  cardLoadFailure,
  cardLoadRequest,
  cardLoadSuccess,
} from '@actions/single-card';

// reducer
import singleCard, { initialState } from './single-card';

describe('Recent Cards Reducer', () => {
  test('should return initial state', () => {
    expect(singleCard(null)).toEqual(initialState);
  });

  test('should handle FETCH_CARD_REQUEST', () => {
    const state = singleCard({ singleCard: initialState }, cardLoadRequest());

    expect(state.card).toEqual(null);
    expect(state.loading).toBeTruthy();
    expect(state.failure).toBeFalsy();
  });

  test('should handle FETCH_CARD_FAILURE', () => {
    const state = singleCard({ singleCard: initialState }, cardLoadFailure());

    expect(state.card).toEqual(null);
    expect(state.loading).toBeFalsy();
    expect(state.failure).toBeTruthy();
  });

  test('should handle FETCH_CARD_SUCCESS', () => {
    const fetchedCard = { a: 1 };

    const state = singleCard(
      { singleCard: initialState },
      cardLoadSuccess(fetchedCard),
    );

    expect(state.card).toEqual(fetchedCard);
    expect(state.loading).toBeFalsy();
    expect(state.failure).toBeFalsy();
  });
});
