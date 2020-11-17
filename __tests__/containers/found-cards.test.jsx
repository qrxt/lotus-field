import React from 'react';
import i18n from '@root/__setup__/i18n-for-tests';
import { FoundCardsContainer } from '@containers/found-cards.jsx';
import renderWithI18n from '@root/__setup__/with-i18n';

describe('Found Cards Container', () => {
  test('should render with empty cards', () => {
    const { getByText } = renderWithI18n(
      <FoundCardsContainer
        location={ { search: null } }
        findCards={ () => {} }
        cardAddedToWishlist={ () => {} }

        searchResult={ { data: [] } }
        loading={ false }
        failure={ false }
      />,
    );

    const noCardsPlaceholder = i18n
      .getDataByLanguage('en').translation.pages['found-cards']['no-cards'];

    expect(getByText(noCardsPlaceholder)).toBeInTheDocument();
  });

  test('should render with loading spinner', () => {
    const { getByTestId } = renderWithI18n(
      <FoundCardsContainer
        location={ { search: null } }
        findCards={ () => {} }
        cardAddedToWishlist={ () => {} }

        loading={ true }
      />,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('should render with err indicator', () => {
    const { getByText } = renderWithI18n(
      <FoundCardsContainer
        location={ { search: null } }
        findCards={ () => {} }
        cardAddedToWishlist={ () => {} }

        loading={ false }
        failure={ true }
      />,
    );

    const { text } = i18n
      .getDataByLanguage('en').translation['error-indicator'];

    expect(getByText(text)).toBeInTheDocument();
  });
});
