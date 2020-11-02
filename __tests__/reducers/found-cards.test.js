// actions
import {
  foundCardsLoadRequest,
  foundCardsLoadSuccess,
  foundCardsLoadFailure,
  findCards,
} from '@actions/found-cards';

// stubs
import { fetchOkStub } from '@root/__stubs__/fetch-stub';

// fixtures
import cardSingle from '@root/__fixtures__/card-single';

// service
import ScryfallService from '@services';

// reducer
import foundCards, { initialState } from '@reducers/found-cards';

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

  test('findCards should work correctly', async () => {
    const scryfallFake = new ScryfallService(fetchOkStub({
      data: [cardSingle.beforeTransformation],
    }));

    const result = await findCards((data) => data.payload, scryfallFake)('query string');

    expect(result)
      .toEqual([cardSingle.afterTransformation]);
  });
});
