import transformKeysToCamelCase from '@utils/transformKeysToCamel';

const transformData = (data) => transformKeysToCamelCase(data);

const transformCardData = (cardData) => {
  const transformed = transformKeysToCamelCase(cardData);
  const {
    name,
    typeLine,
    oracleText,
    flavorText,
    manaCost,
    imageUris,
    cardFaces,
  } = transformed;

  if (!cardFaces) {
    return {
      ...transformed,
      cardFaces: [
        {
          name,
          typeLine,
          oracleText,
          flavorText,
          manaCost,
          imageUris,
        },
      ],
    };
  }

  if (imageUris) {
    return {
      ...transformed,
      cardFaces: transformed.cardFaces.map((face) => (
        { ...face, imageUris }
      )),
    };
  }

  return transformed;
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

  async getPrints(printsUri) {
    const queryString = `/cards/search?order=released&q=oracleid%${printsUri}&unique=prints`;
    const prints = await this.getResource(queryString);
    const prepared = transformData(prints.data);

    return Object.values(prepared);
  }
}

export default CardsService;
