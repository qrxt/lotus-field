import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithI18n from '@root/__setup__/with-i18n';
import Footer from '@components/footer';

describe('Footer', () => {
  test('should render correctly', () => {
    const { getByText } = renderWithI18n(<Footer />);

    const titleText = i18n
      .getDataByLanguage('en').translation.footer.rights.title;
    const rightsText = i18n
      .getDataByLanguage('en').translation.footer.rights.text;

    expect(getByText(titleText)).toBeInTheDocument();
    expect(getByText(rightsText)).toBeInTheDocument();
  });
});
