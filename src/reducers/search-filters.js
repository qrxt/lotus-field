import getModificationsQueryString from '@utils/get-modifications-query-string';

const initialState = {
  name: '',
  nameAutocomplete: '',

  type: '',
  rarity: 'any',
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

  const modifierFields = {
    name: nextFilters.name,
    type: nextFilters.type,
    rarity: nextFilters.rarity,
    artist: nextFilters.artist,
  };

  const queryString = getModificationsQueryString(modifierFields);

  return {
    ...nextFilters,
    queryString,
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
