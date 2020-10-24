export const searchFiltersRefreshed = (field = '', value = '') => ({
  type: 'SEARCH_FILTERS_REFRESHED',
  payload: { field, value },
});

export const searchFiltersReset = () => ({
  type: 'SEARCH_FILTERS_RESET',
});
