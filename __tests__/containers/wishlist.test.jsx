import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import { WishlistContainer } from '@containers/wishlist.jsx';
import renderWithI18n from '@root/__setup__/with-i18n';
import renderWithRouter from '@root/__setup__/with-router';

// fixtures
import cardSingle from '@root/__fixtures__/card-single';
import cardSplit from '@root/__fixtures__/card-split';
import cardDouble from '@root/__fixtures__/card-double';

const cards = [
  cardSingle.afterTransformation,
  cardSplit.afterTransformation,
  cardDouble.afterTransformation,
];

describe('Wishlist Container', () => {
  test('should render with loading spinner', () => {
    const { getByTestId } = renderWithI18n(
      <WishlistContainer
        cardIdList={ [] }
        wishlistFetch={ () => {} }

        loading={ true }
      />,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('should render with err indicator', () => {
    const { getByText } = renderWithI18n(
      <WishlistContainer
        cardIdList={ [] }
        wishlistFetch={ () => {} }

        loading={ false }
        failure={ true }
      />,
    );

    const { text } = i18n
      .getDataByLanguage('en').translation['error-indicator'];

    expect(getByText(text)).toBeInTheDocument();
  });

  test('should render when no cards', () => {
    const { getByText } = renderWithI18n(
      <WishlistContainer
        cardIdList={ [] }
        wishlistFetch={ () => {} }

        cards={ [] }
      />,
    );

    const noCards = i18n
      .getDataByLanguage('en').translation.pages.wishlist['no-cards'];

    expect(getByText(noCards)).toBeInTheDocument();
  });

  test('should render wishlist cards', () => {
    const { getByAltText } = renderWithRouter(
      <WishlistContainer
        cardIdList={ [] }
        wishlistFetch={ () => {} }

        cards={ cards }
      />,
    );

    expect(getByAltText(/Uro,/i)).toBeInTheDocument();
    expect(getByAltText(/Dusk/i)).toBeInTheDocument();
    expect(getByAltText(/Valakut/i)).toBeInTheDocument();
  });
});
