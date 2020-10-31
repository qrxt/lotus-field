// Card Types
import cardSingle from '@root/__fixtures__/card-single';
import cardSplit from '@root/__fixtures__/card-split';
import cardDouble from '@root/__fixtures__/card-double';

// Card Rulings
import rulings from '@root/__fixtures__/rulings';

import ScryfallService from './scryfall-service';

const fetchOkStub = (data) => () => (
  new Promise((resolve) => {
    resolve({
      status: 200,
      ok: true,
      json: () => new Promise((innerResolve) => {
        innerResolve(data);
      }),
    });
  })
);

const fetchErrStub = (status) => () => (
  new Promise((resolve) => {
    resolve({
      status,
      ok: false,
    });
  })
);

describe('Scryfall Service', () => {
  test('should construct instance correctly', () => {
    const service = new ScryfallService(fetchOkStub());

    expect(service).toBeDefined();
  });

  test('should return null when 404', async () => {
    const service = new ScryfallService(fetchErrStub(404));
    const result = await service.getResource('404 link');

    expect(result).toBeNull();
  });

  test('should fetch data correctly without transformation', async () => {
    const before = {
      a: 1,
      b_c: {
        c: 2,
      },
    };
    const after = { ...before };

    const service = new ScryfallService(fetchOkStub(before));
    const result = await service.getResource('link');

    expect(result).toEqual(after);
  });

  test('getCardById should fetch and transform data [single-sided card]', async () => {
    const before = cardSingle.beforeTransformation;
    const after = cardSingle.afterTransformation;

    const service = new ScryfallService(fetchOkStub(before));
    const result = await service.getCardById('uro scryfall id');

    expect(result).toEqual(after);
  });

  test('getCardById should fetch and transform data [split card]', async () => {
    const before = cardSplit.beforeTransformation;
    const after = cardSplit.afterTransformation;

    const service = new ScryfallService(fetchOkStub(before));
    const result = await service.getRandomCard();

    expect(result).toEqual(after);
  });

  test('getCardById should fetch and transform data [double sided card]', async () => {
    const before = cardDouble.beforeTransformation;
    const after = cardDouble.afterTransformation;

    const service = new ScryfallService(fetchOkStub(before));
    const result = await service.getCardById('valakut id');

    expect(result).toEqual(after);
  });

  test('getRulingsByCard should return correct transformed rulings', async () => {
    const before = rulings.beforeTransformation;
    const after = rulings.afterTransformation;

    const service = new ScryfallService(fetchOkStub(before));
    const result = await service.getRulingsByCard('card');

    expect(result).toEqual(after);
  });
});
