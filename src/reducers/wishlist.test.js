// actions
import {
  cardAddedToWishlist,
  wishlistLoadFailure,
  wishlistLoadRequest,
  wishlistLoadSuccess,
  cardRemovedFromWishlist,
} from '@actions/wishlist';

// CARD_ADDED_TO_WISHLIST
// CARD_REMOVED_FROM_WISHLIST
// FETCH_WISHLIST_CARDS_FAILURE
// FETCH_WISHLIST_CARDS_REQUEST
// FETCH_WISHLIST_CARDS_SUCCESS

// reducer
import wishlist, { initialState } from './wishlist';

describe('Wishlist Cards Reducer', () => {
  test('should return initial state', () => {
    expect(wishlist(null)).toEqual(initialState);
  });

  test('should handle CARD_ADDED_TO_WISHLIST and CARD_REMOVED_FROM_WISHLIST', () => {
    const testId = 'card test id';
    const stateWithAdded = wishlist({ wishlist: initialState }, cardAddedToWishlist(testId));

    expect(stateWithAdded)
      .toEqual({
        ...initialState,
        cardIds: [
          ...initialState.cardIds,
          testId,
        ],
      });

    expect(wishlist({ wishlist: stateWithAdded }, cardRemovedFromWishlist(testId)))
      .toEqual(initialState);
  });

  test('should handle FETCH_WISHLIST_CARDS_REQUEST', () => {
    const state = wishlist({ wishlist: initialState }, wishlistLoadRequest());

    expect(state.cardsLoaded).toEqual([]);
    expect(state.loading).toBeTruthy();
    expect(state.error).toBeFalsy();
  });

  test('should handle FETCH_WISHLIST_CARDS_FAILURE', () => {
    const state = wishlist({ wishlist: initialState }, wishlistLoadFailure());

    expect(state.cardsLoaded).toEqual([]);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeTruthy();
  });

  test('should handle FETCH_WISHLIST_CARDS_SUCCESS', () => {
    const cards = ['card', 'card'];

    const state = wishlist(
      { wishlist: initialState },
      wishlistLoadSuccess(cards),
    );

    expect(state.cardsLoaded).toEqual(cards);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeFalsy();
  });
});
