import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '@components/error-boundary/error-boundary.jsx';

describe('Seach Form Container', () => {
  test('should not be errored initially', () => {
    const { queryByTestId, getByText } = render(
      <ErrorBoundary>
        <p>some text</p>
      </ErrorBoundary>,
    );

    expect(queryByTestId('error-indicator')).not.toBeInTheDocument();
    expect(getByText(/some text/)).toBeInTheDocument();
  });
});
