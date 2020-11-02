export default ({
  beforeTransformation: {
    data: [
      {
        object: 'ruling',
        oracle_id: 'afa49a09-146f-4439-850e-dd1938c93cef',
        source: 'scryfall',
        published_at: '2015-01-19',
        comment:
          'Derevi, Empyrial Tactician is banned as a commander in Duel Commander format, but it may be part of your deck.',
      },
      {
        object: 'ruling',
        oracle_id: 'afa49a09-146f-4439-850e-dd1938c93cef',
        source: 'wotc',
        published_at: '2013-10-17',
        comment:
          'You can activate Derevi’s last ability only when it is in the command zone.',
      },
      {
        object: 'ruling',
        oracle_id: 'afa49a09-146f-4439-850e-dd1938c93cef',
        source: 'wotc',
        published_at: '2013-10-17',
        comment:
          'When you activate Derevi’s last ability, you’re not casting Derevi as a spell.',
      },
    ],
  },

  afterTransformation: [
    {
      object: 'ruling',
      oracleId: 'afa49a09-146f-4439-850e-dd1938c93cef',
      source: 'scryfall',
      publishedAt: '2015-01-19',
      comment:
        'Derevi, Empyrial Tactician is banned as a commander in Duel Commander format, but it may be part of your deck.',
    },
    {
      object: 'ruling',
      oracleId: 'afa49a09-146f-4439-850e-dd1938c93cef',
      source: 'wotc',
      publishedAt: '2013-10-17',
      comment:
        'You can activate Derevi’s last ability only when it is in the command zone.',
    },
    {
      object: 'ruling',
      oracleId: 'afa49a09-146f-4439-850e-dd1938c93cef',
      source: 'wotc',
      publishedAt: '2013-10-17',
      comment:
        'When you activate Derevi’s last ability, you’re not casting Derevi as a spell.',
    },
  ],
});
