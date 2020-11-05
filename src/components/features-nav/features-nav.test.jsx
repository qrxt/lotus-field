import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithRouter from '@root/__setup__/with-router';
import FeaturesNav from '@components/features-nav';

describe('Footer', () => {
  test('should render correctly', () => {
    const { getByText } = renderWithRouter(<FeaturesNav />);

    const randomCardText = i18n
      .getDataByLanguage('en').translation['features-nav']['random-card'];

    expect(getByText(randomCardText)).toBeInTheDocument();
  });
});
