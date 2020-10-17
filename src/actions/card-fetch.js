import cardLoadFailure from './card-load-failure';
import cardLoadRequest from './card-load-request';
import cardLoadSuccess from './card-load-success';

export default (dispatch, scryfallService) => (cardId) => {
  const fetchCard = cardId === 'random'
    ? scryfallService.getRandomCard()
    : scryfallService.getCardById(cardId);

  const fetchRulings = fetchCard
    .then((fetchedCard) => scryfallService.getRulingsByCard(fetchedCard.id));

  dispatch(cardLoadRequest());
  return Promise.all([fetchCard, fetchRulings])
    .then(([card, rulings]) => ({
      ...card,
      rulings,
    }))
    .then((card) => dispatch(cardLoadSuccess(card)))
    .catch(() => {
      dispatch(cardLoadFailure());
    });
};
