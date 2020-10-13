import recentCardsLoadFailure from './recent-cards-load-failure';
import recentCardsLoadRequest from './recent-cards-load-request';
import recentCardsLoadSuccess from './recent-cards-load-success';

export default (dispatch, scryfallService) => (idList) => {
  dispatch(recentCardsLoadRequest());
  scryfallService.getCardsByIdList(idList)
    .then((cards) => {
      dispatch(recentCardsLoadSuccess(cards));
    })
    .catch(() => dispatch(recentCardsLoadFailure()));
};
