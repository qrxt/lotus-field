import React from 'react';
import renderWithI18n from '@root/__setup__/with-i18n';
import CardFull from '@components/card-full';

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
    const { getByText } = renderWithI18n(
      <CardFull
        cardRemovedFromWishlist={ () => {} }
        cardAddedToWishlist={ () => {} }
        card={ card }
      />,
    );

    // check body render
    expect(getByText(/Uro, Titan of Nature's Wrath/i)).toBeInTheDocument();

    // check legalities
    expect(getByText(/Banned/i)).toBeInTheDocument();

    // check prices
    expect(getByText(/0.87/i)).toBeInTheDocument();
  });
});
