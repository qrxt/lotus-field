export default (field, value) => ({
  type: 'SEARCH_FILTERS_REFRESHED',
  payload: { field, value },
});
