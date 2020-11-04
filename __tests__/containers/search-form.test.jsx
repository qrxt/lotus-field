import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import { SearchFormContainer } from '@containers/search-form.jsx';
import { render } from '@testing-library/react';
import { initialState } from '@reducers/search-filters';

describe('Seach Form Container', () => {
  test('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchFormContainer
        searchFilters={ initialState }
        onFiltersReset={ () => {} }
        onFiltersRefresh={ () => {} }
        history={ {} }
      />,
    );

    const { placeholder: namePlaceholder } = i18n
      .getDataByLanguage('en').translation['search-form']['name-input'];

    expect(getByPlaceholderText(namePlaceholder)).toBeInTheDocument();
  });
});
