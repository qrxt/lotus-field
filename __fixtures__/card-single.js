export default ({
  beforeTransformation: {
    id: 'test-id',
    name: 'Uro, Titan of Nature\'s Wrath',
    type_line: 'Legendary Creature — Elder Giant',
    oracle_text: 'long card text',
    flavor_text: 'some flavor text',
    mana_cost: '{1}{G}{U}',
    image_uris: {
      art_crop: 'art crop link',
      art_normal: 'art normal link',
    },
    toughness: 6,
    power: 6,
  },

  afterTransformation: {
    id: 'test-id',
    name: 'Uro, Titan of Nature\'s Wrath',
    typeLine: 'Legendary Creature — Elder Giant',
    oracleText: 'long card text',
    flavorText: 'some flavor text',
    manaCost: '{1}{G}{U}',
    imageUris: {
      artCrop: 'art crop link',
      artNormal: 'art normal link',
    },
    toughness: 6,
    power: 6,

    cardFaces: [
      {
        name: 'Uro, Titan of Nature\'s Wrath',
        typeLine: 'Legendary Creature — Elder Giant',
        oracleText: 'long card text',
        flavorText: 'some flavor text',
        manaCost: '{1}{G}{U}',
        imageUris: {
          artCrop: 'art crop link',
          artNormal: 'art normal link',
        },
        toughness: 6,
        power: 6,
      },
    ],
  },
});
