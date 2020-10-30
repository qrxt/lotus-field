import React from 'react';

import renderWithI18n from '@root/__setup__/with-i18n';
import Footer from './footer.jsx';

describe('Footer', () => {
  test('renders correctly', () => {
    const { getByText } = renderWithI18n(
      <Footer />,
    );
    const footer = getByText(/Rights/i);

    expect(footer).toBeInTheDocument();
  });
});
