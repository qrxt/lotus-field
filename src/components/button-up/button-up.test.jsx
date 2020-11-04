import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithI18n from '@root/__setup__/with-i18n';
import ButtonUp from '@components/button-up';

describe('ButtonUp', () => {
  test('should render & be hidden', () => {
    const { getByLabelText, getByRole } = renderWithI18n(<ButtonUp noIcon={ true } />);

    const labelText = i18n
      .getDataByLanguage('en').translation.buttons.up.description;

    expect(getByLabelText(labelText)).toBeInTheDocument();
    expect(getByRole('button', { hidden: true })).toBeInTheDocument();
  });

  test('should be displayed when scrollTop = displayOn', () => {
    const {
      getByLabelText,
      getByRole,
    } = renderWithI18n(<ButtonUp noIcon={ true } displayOn={ 0 } />);

    const labelText = i18n
      .getDataByLanguage('en').translation.buttons.up.description;

    expect(getByLabelText(labelText)).toBeInTheDocument();
    expect(getByRole('button', { hidden: false })).toBeInTheDocument();
  });
});
