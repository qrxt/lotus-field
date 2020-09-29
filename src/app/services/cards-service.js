class CardsService {
  constructor(client = window.fetch.bind(window)) {
    this.client = client;
  }

  _apiBase = 'https://api.scryfall.com';

  async getResource(url) {
    const response = await this.client(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}. Status: ${ response.status }`);
    }

    return await response.json();
  }

  async getRandom() {
    const result = await this.getResource(`/cards/random`);
    return result;
  }
}

export default CardsService;
