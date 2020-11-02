import flipObject from '@utils/flip-object';

const regularObject = {
  a: 'b',
  c: 'd',
};

const regularObjectFlipped = {
  b: 'a',
  d: 'c',
};

const objWithKeyConflicts = {
  a: 'b',
  b: 'c',
};

const objWithKeyConflictsFlipped = {
  b: 'a',
  c: 'b',
};

describe('Flip Object Function', () => {
  test('should flip object keys and values', () => {
    expect(flipObject(regularObject))
      .toEqual(regularObjectFlipped);
  });

  test('should flip objects with key conflicts correctly', () => {
    expect(flipObject(objWithKeyConflicts))
      .toEqual(objWithKeyConflictsFlipped);
  });
});
