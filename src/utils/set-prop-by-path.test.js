import setPropByPath from './set-prop-by-path';

const obj = {
  a: 1,
  b: {
    c: {
      d: 111,
      hello: 'world',
    },
  },
};

const objAfterSet = {
  a: 1,
  b: {
    c: {
      d: 111,
      hello: 'there',
    },
  },
};

const objAfterSet2 = {
  a: 1,
  b: {
    c: {
      d: 111,
      hello: 'world',
    },
  },
  c: {
    d: {
      e: {
        f: 1,
      },
    },
  },
};

describe('SetPropByPath Function', () => {
  test('should return new version of obj with changed prop by path [immutable]', () => {
    const copy = JSON.parse(JSON.stringify(obj));
    const changed = setPropByPath(obj, 'b.c.hello', 'there');

    expect(changed).toEqual(objAfterSet);
    expect(copy).toEqual(obj);
  });

  test('should create props if they dont exist in obj [immutable]', () => {
    const copy = JSON.parse(JSON.stringify(obj));
    const changed = setPropByPath(obj, 'c.d.e.f', 1);

    expect(changed).toEqual(objAfterSet2);
    expect(copy).toEqual(obj);
  });
});
