import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithRouter from '@root/__setup__/with-router';
import Header from '@components/header';

describe('Header', () => {
  test('should render & include nav', () => {
    const { getByText } = renderWithRouter(<Header />);

    const { home: homeLinkText } = i18n
      .getDataByLanguage('en').translation['nav-menu'];
    const { wishlist: wishlistLinkText } = i18n
      .getDataByLanguage('en').translation['nav-menu'];

    expect(getByText(homeLinkText)).toBeInTheDocument();
    expect(getByText(wishlistLinkText)).toBeInTheDocument();
  });
});
