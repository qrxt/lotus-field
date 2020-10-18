import updateSingleCard from './single-card';
import updateRecentCards from './recent-cards';
import updateSearchFilters from './search-filters';
import updateFoundCards from './found-cards';
import updateWishlistCards from './wishlist';

export default (state, action) => ({
  singleCard: updateSingleCard(state, action),
  recentCards: updateRecentCards(state, action),
  searchFilters: updateSearchFilters(state, action),
  foundCards: updateFoundCards(state, action),
  wishlist: updateWishlistCards(state, action),
});
