import React from 'react';
import { render } from '@testing-library/react';
import ManaCost from './mana-cost.jsx';

describe('Mana Cost', () => {
  test('should display mana cost', () => {
    const { getByText } = render(<ManaCost symbolCode="1" />);

    expect(getByText('1 mana-symbol')).toBeInTheDocument();
  });
});
