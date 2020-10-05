import transformKeysToCamelCase from '@utils/transformKeysToCamel';

const transformCardData = (card) => transformKeysToCamelCase(card);

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
}

export default CardsService;
