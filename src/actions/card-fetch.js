import cardLoadFailure from './card-load-failure';
import cardLoadRequest from './card-load-request';
import cardLoadSuccess from './card-load-success';

export default (dispatch, scryfallService) => (cardId) => {
  const fetchCard = scryfallService.getCardById(cardId);
  const fetchRulings = scryfallService.getRulingsByCard(cardId);

  dispatch(cardLoadRequest());
  Promise.all([fetchCard, fetchRulings])
    .then(([card, rulings]) => ({
      ...card,
      rulings,
    }))
    .then((card) => dispatch(cardLoadSuccess(card)))
    .catch(() => {
      dispatch(cardLoadFailure());
    });
};
