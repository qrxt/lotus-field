import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import ManaCost from '@components/mana-cost';
import styles from './color-identity-input.css';

const initialColors = [
  {
    name: 'white',
    code: 'W',
    active: false,
  },

  {
    name: 'blue',
    code: 'U',
    active: false,
  },

  {
    name: 'black',
    code: 'B',
    active: false,
  },

  {
    name: 'red',
    code: 'R',
    active: false,
  },

  {
    name: 'green',
    code: 'G',
    active: false,
  },

  {
    name: 'colorless',
    code: 'C',
    active: false,
  },
];

const ColorIdentityInput = ({ className }) => { // outer onChange
  const [colors, setColors] = useState(initialColors);

  return (
    <ToggleButtonGroup
      type="checkbox"
      className={ cn(className, styles.bar) }
      onChange={ (values) => {
        console.log(values);
        console.log(setColors);
      } }
    >
      {
        colors.map((currentColor, idx) => (
          <ToggleButton
          key={ idx }
          value={ idx }
          variant="light"
          className={ cn(
            styles.toggle,
            'flex-grow-0',
            'rounded-circle',
            { active: currentColor.active },
          ) }
          aria-label={ `Color Identity Input for ${currentColor.name} color` }
        >
          <ManaCost symbolCode={ currentColor.code } />
        </ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  );
};

ColorIdentityInput.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

export default ColorIdentityInput;
