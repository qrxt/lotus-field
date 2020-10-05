import cardLoadFailure from './card-load-failure';
import cardLoadRequest from './card-load-request';
import cardLoadSuccess from './card-load-success';

export default (dispatch, scryfallService) => (cardId) => {
  dispatch(cardLoadRequest());
  scryfallService.getCardById(cardId)
    .then((card) => dispatch(cardLoadSuccess(card)))
    .catch(() => {
      dispatch(cardLoadFailure());
    });
};
