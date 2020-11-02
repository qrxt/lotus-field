export default ({
  beforeTransformation: {
    name: 'Dusk // Dawn',
    type_line: 'Sorcery // Sorcery',
    oracle_text: 'long card text',
    flavor_text: 'some flavor text',
    mana_cost: '{1}{G}{U}',
    image_uris: {
      art_crop: 'crop art for both sides',
    },
    card_faces: [
      {
        object: 'card_face',
        name: 'Dusk',
        mana_cost: '{2}{W}{W}',
        type_line: 'Sorcery',
        oracle_text: 'Destroy all creatures with power 3 or greater.',
        artist: 'Noah Bradley',
        artist_id: '81995d11-da98-4f8b-89bd-b88ca2ddb06b',
        illustration_id: 'f3d63aed-2784-4ef5-9676-846b1e65e040',
      },
      {
        object: 'card_face',
        name: 'Dawn',
        mana_cost: '{3}{W}{W}',
        type_line: 'Sorcery',
        oracle_text:
          'Aftermath (Cast this spell only from your graveyard. Then exile it.)......',
        artist: 'Noah Bradley',
        artist_id: '81995d11-da98-4f8b-89bd-b88ca2ddb06b',
      },
    ],
  },

  afterTransformation: {
    name: 'Dusk // Dawn',
    typeLine: 'Sorcery // Sorcery',
    oracleText: 'long card text',
    flavorText: 'some flavor text',
    manaCost: '{1}{G}{U}',
    imageUris: {
      artCrop: 'crop art for both sides',
    },
    cardFaces: [
      {
        object: 'card_face',
        name: 'Dusk',
        manaCost: '{2}{W}{W}',
        typeLine: 'Sorcery',
        oracleText: 'Destroy all creatures with power 3 or greater.',
        artist: 'Noah Bradley',
        artistId: '81995d11-da98-4f8b-89bd-b88ca2ddb06b',
        illustrationId: 'f3d63aed-2784-4ef5-9676-846b1e65e040',
        imageUris: {
          artCrop: 'crop art for both sides',
        },
      },
      {
        object: 'card_face',
        name: 'Dawn',
        manaCost: '{3}{W}{W}',
        typeLine: 'Sorcery',
        oracleText:
          'Aftermath (Cast this spell only from your graveyard. Then exile it.)......',
        artist: 'Noah Bradley',
        artistId: '81995d11-da98-4f8b-89bd-b88ca2ddb06b',
        imageUris: {
          artCrop: 'crop art for both sides',
        },
      },
    ],
  },
});
