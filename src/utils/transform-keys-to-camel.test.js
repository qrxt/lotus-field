import transformToCamelcase from './transform-keys-to-camel';

const before = {
  image_uris: {
    art_crop: 'url#1',
    art_normal: 'url#2',
  },
};

const after = {
  imageUris: {
    artCrop: 'url#1',
    artNormal: 'url#2',
  },
};

describe('Transform Object Keys to CamelCase', () => {
  test('should transform [nested]', () => {
    expect(transformToCamelcase(before)).toEqual(after);
  });
});
