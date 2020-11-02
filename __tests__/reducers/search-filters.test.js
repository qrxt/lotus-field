// actions
import {
  searchFiltersRefreshed,
  searchFiltersReset,
} from '@actions/search-filters';

// reducer
import searchFilters, { initialState } from '@reducers/search-filters';

describe('Recent Cards Reducer', () => {
  test('should return initial state', () => {
    expect(searchFilters(null)).toEqual(initialState);
  });

  test('should handle SEARCH_FILTERS_REFRESHED and SEARCH_FILTERS_RESET', () => {
    const field = 'name';
    const value = 'lorem ipsum';
    const state = searchFilters(
      { searchFilters: initialState },
      searchFiltersRefreshed(field, value),
    );
    const stateReset = searchFilters(
      { searchFilters: state },
      searchFiltersReset(),
    );

    expect(state)
      .toEqual({
        ...initialState,
        name: '',
        nameExact: false,
        nameAutocomplete: '',
        colorIdentity: '',
        cardText: '',
        type: '',
        rarity: 'any',
        unique: 'cards',
        artist: '',
        queryString: '"lorem ipsum"+r:"any"+unique:cards',
        [field]: value,
      });

    expect(stateReset).toEqual(initialState);
  });
});
