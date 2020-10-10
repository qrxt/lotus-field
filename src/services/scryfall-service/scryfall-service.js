import transformKeysToCamelCase from '@utils/transformKeysToCamel';
import CardSingleFaced from './card-single';
import CardSplitFaced from './card-split';

const transformData = (data) => transformKeysToCamelCase(data);
const defineCardType = (card) => {
  const { cardFaces, imageUris } = card;

  if (!cardFaces) {
    return 'single-faced';
  }

  if (imageUris) {
    return 'split';
  }

  return 'double-faced';
};

const transformCardData = (cardData) => {
  const cardWrappersMapping = {
    'double-faced': (card) => card,
    'single-faced': CardSingleFaced,
    split: CardSplitFaced,
  };
  const transformed = transformKeysToCamelCase(cardData);
  const fittingWrapper = cardWrappersMapping[defineCardType(transformed)];

  return fittingWrapper(transformed);
};

class CardsService {
  constructor(client = window.fetch.bind(window)) {
    this.client = client;
  }

  apiBase = 'https://api.scryfall.com';

  async getResource(url) {
    const response = await this.client(`${this.apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}. Status: ${response.status}`);
    }

    return response.json();
  }

  async getRandomCard() {
    const card = await this.getResource('/cards/random');
    return transformCardData(card);
  }

  async getCardById(id) {
    const card = await this.getResource(`/cards/${id}`);
    return transformCardData(card);
  }

  async getRulingsByCard(cardId) {
    const rulings = await this.getResource(`/cards/${cardId}/rulings`);
    const prepared = transformData(rulings.data);

    return Object.values(prepared);
  }

  async getCardsByIdList(idList) {
    return idList.map(async (id) => {
      const card = await this.getCardById(id);
      return transformCardData(card);
    });
  }
}

export default CardsService;
