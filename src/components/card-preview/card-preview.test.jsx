import React from 'react';
import CardPreview from '@components/card-preview';

import renderWithRouter from '@root/__setup__/with-router';

// fixtures
import singleCard from '@root/__fixtures__/card-single';

const { afterTransformation: card } = singleCard;

describe('ButtonUp', () => {
  test('should render & be hidden', () => {
    const { getByAltText } = renderWithRouter(<CardPreview card={ card } />);

    expect(getByAltText(card.name)).toBeInTheDocument();
  });
});
