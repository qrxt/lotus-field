import getPropByPath from './get-prop-by-path';

// function doesn't support [key] paths

const obj = {
  a: 1,
  b: {
    c: {
      d: 111,
      hello: 'world',
    },
  },
};

describe('GetPropByPath Function', () => {
  test('should get value of prop by path #1', () => {
    expect(getPropByPath(obj, 'a'))
      .toBe(1);
  });

  test('should get value of prop by path #2', () => {
    expect(getPropByPath(obj, 'b.c.hello'))
      .toBe('world');
  });

  test('should return default value #1', () => {
    expect(getPropByPath(obj, 'b.c.hellow'))
      .toBeNull();
  });

  test('should return default value #2', () => {
    expect(getPropByPath(obj, 'b.c.hellow', 'foo'))
      .toBe('foo');
  });
});
