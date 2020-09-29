const transformCardData = (card) => ({
  artistIds: card.artist_ids,
  borderColor: card.border_color,
  cardBackId: card.card_back_id,
  colorIdentity: card.color_identity,
  fullArt: card.full_art,
  illustrationId: card.illustration_id,
  manaCost: card.mana_cost,
  mtgoFoilId: card.mtgo_foil_id,
  mtgoId: card.mtgo_id,
  oracleId: card.oracle_id,
  oracleText: card.oracle_text,
  printsSearchUri: card.prints_search_uri,
  purchaseUris: card.purchase_uris,
  relatedUris: card.related_uris,
  rulingUri: card.rulings_uri,
  scryfallSetUri: card.scryfall_set_uri,
  scryfallUri: card.scryfall_uri,
  setName: card.set_name,
  setSearchUri: card.set_search_uri,
  setType: card.set_type,
  storySpotlight: card.story_spotlight,
  tcgPlayerId: card.tcgplayer_id,
  typeLine: card.type_line,

  ...card,
});

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

  async getRandom() {
    const card = await this.getResource('/cards/random');
    return transformCardData(card);
  }
}

export default CardsService;
