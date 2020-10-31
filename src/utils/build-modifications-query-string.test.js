import buildModificationsQueryString from './build-modifications-query-string';

const filters = {
  name: 'Brazen Borrower',
  nameExact: true,
  colorIdentity: 'b',
  type: 'creature',
  rarity: 'mythic',

  // some trash props
  something: '',
  exde: '',
  empty: null,
};

const filters2 = {
  artist: 'Rebecca Guay',
  unique: 'arts',
  cardText: 'Cool Text',
};

describe('Build Modifications Query String Function', () => {
  test('should build correct modifications string #1', () => {
    const modsString = buildModificationsQueryString(filters);

    expect(modsString)
      .toBe('!"Brazen Borrower"+c:b+t:"creature"+r:"mythic"');
  });

  test('should build correct modifications string #2', () => {
    // includes other options & no name
    const modsString = buildModificationsQueryString(filters2);

    expect(modsString)
      .toBe('a:"Rebecca Guay"+unique:arts+o:"Cool Text"');
  });
});
