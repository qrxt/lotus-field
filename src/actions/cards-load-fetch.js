import cardsLoadFailure from './cards-load-failure';
import cardsLoadRequest from './cards-load-request';
import cardsLoadSuccess from './cards-load-success';

export default (dispatch, scryfallService) => (idList) => {
  dispatch(cardsLoadRequest());
  scryfallService.getCardsByIdList(idList)
    .then((cards) => {
      dispatch(cardsLoadSuccess(cards));
    })
    .catch(() => dispatch(cardsLoadFailure()));
};
