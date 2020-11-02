import buildModificationsString from '@src/utils/build-modifications-query-string';

const initialState = {
  name: '',
  nameExact: false,
  nameAutocomplete: '',
  colorIdentity: '',
  cardText: '',
  type: '',
  rarity: 'any',
  unique: 'cards',
  artist: '',

  queryString: '',
};

const resetFilters = () => initialState;

const refreshFilters = (state, payload) => {
  if (!payload) {
    return state.searchFilters;
  }

  const nextFilters = ({
    ...state.searchFilters,
    [payload.field]: payload.value,
  });

  const modificationsString = buildModificationsString(nextFilters);

  return {
    ...nextFilters,
    queryString: modificationsString,
  };
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }

  const actionTypesMapping = {
    SEARCH_FILTERS_REFRESHED: refreshFilters(
      state,
      action.payload,
    ),

    SEARCH_FILTERS_RESET: resetFilters(),
  };

  return actionTypesMapping[action.type] || state.searchFilters;
};

export { initialState };
