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

describe('Build Modifications Query String Fucntion', () => {
  test('should build correct modifications string', () => {
    const modsString = buildModificationsQueryString(filters);

    expect(modsString)
      .toBe('!"Brazen Borrower"+c:b+t:"creature"+r:"mythic"');
  });
});
