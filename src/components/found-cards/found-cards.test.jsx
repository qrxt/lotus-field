import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithI18n from '@root/__setup__/with-i18n';
import FoundCards from '@components/found-cards';

// // fixtures
// import cardSingle from '@root/__fixtures__/card-single';
// import cardSplit from '@root/__fixtures__/card-split';
// import cardDouble from '@root/__fixtures__/card-double';

// const cards = [
//   cardSingle,
//   cardSplit,
//   cardDouble,
// ];

describe('Found Cards', () => {
  test('should render if no cards', () => {
    const { getByText } = renderWithI18n(<FoundCards cards={ [] } />);

    const noCardsText = i18n
      .getDataByLanguage('en').translation.pages['found-cards']['no-cards'];

    expect(getByText(noCardsText)).toBeInTheDocument();
  });
});
