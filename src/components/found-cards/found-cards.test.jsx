import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithRouter from '@root/__setup__/with-router';
import renderWithI18n from '@root/__setup__/with-i18n';
import FoundCards from '@components/found-cards';

// fixtures
import cardSingle from '@root/__fixtures__/card-single';
import cardSplit from '@root/__fixtures__/card-split';
import cardDouble from '@root/__fixtures__/card-double';

const cards = [
  cardSingle.afterTransformation,
  cardSplit.afterTransformation,
  cardDouble.afterTransformation,
];

describe('Found Cards', () => {
  test('should render if no cards', () => {
    const { getByText } = renderWithI18n(<FoundCards cards={ [] } />);

    const noCardsText = i18n
      .getDataByLanguage('en').translation.pages['found-cards']['no-cards'];

    expect(getByText(noCardsText)).toBeInTheDocument();
  });

  test('should render card backs', () => {
    const { getAllByAltText } = renderWithI18n(<FoundCards cards={ cards } />);

    const { alt } = i18n
      .getDataByLanguage('en').translation.cards.placeholder;

    expect(getAllByAltText(alt).length).toBe(3);
  });

  test('should render cards correctly', () => {
    const { getByAltText } = renderWithRouter(<FoundCards cards={ cards } lazy={ false } />);

    expect(getByAltText(/Uro/i)).toBeInTheDocument();
    expect(getByAltText(/Dusk/i)).toBeInTheDocument();
    expect(getByAltText(/Valakut/i)).toBeInTheDocument();
  });
});
