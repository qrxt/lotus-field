import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import { CardFullContainer } from '@containers/card-full.jsx';
import renderWithI18n from '@root/__setup__/with-i18n';
import { createBrowserHistory } from 'history';

// fixtures
import cardSingle from '@root/__fixtures__/card-single';

const card = {
  ...cardSingle.afterTransformation,
  legalities: {
    standard: 'banned',
    future: 'legal',
  },
  rulings: [
    {
      object: 'ruling',
      oracle_id: 'ee302659-59ed-4eef-babe-451b9ccf7f14',
      source: 'wotc',
      published_at: '2020-01-24',
      comment: 'Uro’s first ability causes you to sacrifice it if you didn’t cast it...',
    },
  ],
  prints: [{ ...cardSingle.afterTransformation, prints: [] }],
  prices: { usd: '0.87' },
};

describe('Card Full Container', () => {
  test('should render with loading spinner', () => {
    const { getByTestId } = renderWithI18n(
      <CardFullContainer
        history={ createBrowserHistory() }
        cardAddedToRecent={ () => {} }
        cardFetch={ () => new Promise((resolve) => resolve()) }
        cardRemovedFromWishlist={ () => {} }
        cardAddedToWishlist={ () => {} }
        cardId="123"

        loading={ true }
        failure={ false }
        card={ {} }
      />,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('should render with err indicator', () => {
    const { getByText } = renderWithI18n(
      <CardFullContainer
        history={ createBrowserHistory() }
        cardAddedToRecent={ () => {} }
        cardFetch={ () => new Promise((resolve) => resolve()) }
        cardRemovedFromWishlist={ () => {} }
        cardAddedToWishlist={ () => {} }
        cardId="123"

        failure={ true }
        loading={ false }
        card={ {} }
      />,
    );

    const { text } = i18n
      .getDataByLanguage('en').translation['error-indicator'];

    expect(getByText(text)).toBeInTheDocument();
  });

  test('should render card', () => {
    const { getAllByText } = renderWithI18n(
      <CardFullContainer
        history={ createBrowserHistory() }
        cardAddedToRecent={ () => {} }
        cardFetch={ () => new Promise((resolve) => resolve()) }
        cardRemovedFromWishlist={ () => {} }
        cardAddedToWishlist={ () => {} }
        cardId="123"

        failure={ false }
        loading={ false }
        card={ card }
      />,
    );

    // display both the name from card title and from ruling
    expect(getAllByText(/Uro/i)).toHaveLength(2);
  });
});
