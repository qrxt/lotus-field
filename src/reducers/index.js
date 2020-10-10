import updateSingleCard from './single-card';
import updateRecentCards from './recent-cards';

export default (state, action) => ({
  singleCard: updateSingleCard(state, action),
  recentCards: updateRecentCards(state, action),
});
