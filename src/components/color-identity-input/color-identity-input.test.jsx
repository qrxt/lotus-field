import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import renderWithI18n from '@root/__setup__/with-i18n';
import { fireEvent } from '@testing-library/react';
import ColorIdentityInput from '@components/color-identity-input';

describe('Color Identity Input', () => {
  test('buttons should be disabled', () => {
    const { getByLabelText } = renderWithI18n(<ColorIdentityInput />);

    const { disabled } = i18n
      .getDataByLanguage('en').translation.inputs.['color-identity'];

    ['black', 'red', 'blue', 'green', 'white'].forEach((color) => {
      expect(getByLabelText(`${disabled} ${color}`)).toBeInTheDocument();
    });
  });

  test('buttons should be enabled after click', () => {
    const { getByLabelText } = renderWithI18n(
      <ColorIdentityInput onFiltersRefresh={ () => {} } />,
    );

    const { enabled, disabled } = i18n
      .getDataByLanguage('en').translation.inputs.['color-identity'];

    ['black', 'red', 'blue', 'green', 'white'].forEach((color) => {
      fireEvent.click(getByLabelText(`${disabled} ${color}`));

      expect(getByLabelText(`${enabled} ${color}`)).toBeInTheDocument();
    });
  });
});
