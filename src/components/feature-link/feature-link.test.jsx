import React from 'react';
import renderWithRouter from '@root/__setup__/with-router';
import FeatureLink from '@components/feature-link';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

describe('Feature Link', () => {
  test('should render correctly', () => {
    const { getByText } = renderWithRouter(
      <FeatureLink
        icon={ faHeart }
        to='/somewhere'
      >
        Test text
      </FeatureLink>,
    );

    expect(getByText(/Test text/i)).toBeInTheDocument();
  });
});
