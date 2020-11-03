import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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

const generateColorButtons = (colors, setColors, t) => colors.map((currentColor, idx) => (
  <ToggleButton
    key={ idx }
    value={ idx }
    variant="light"
    className={ cn(
      styles.toggle,
      'flex-grow-0',
      'rounded-circle',
    ) }
    aria-label={
      currentColor.active
        ? `${t('inputs.color-identity.enabled')} ${currentColor.name}`
        : `${t('inputs.color-identity.disabled')} ${currentColor.name}`
    }

    onChange={ (evt) => {
      const changedColorIdx = evt.target.value;

      setColors((prevColors) => prevColors.map((color, currentIdx) => (
        currentIdx === Number(changedColorIdx)
          ? { ...color, active: !color.active }
          : color
      )));
    } }
  >
    <ManaCost symbolCode={ currentColor.code } />
  </ToggleButton>
));

const ColorIdentityInput = ({ className, onFiltersRefresh }) => { // outer onChange
  const { t } = useTranslation();
  const [colors, setColors] = useState(initialColors);
  const identity = colors
    .filter((color) => color.active)
    .map((color) => color.code.toLowerCase())
    .join('');

  return (
    <ToggleButtonGroup
      type="checkbox"
      className={ cn(className, styles.bar) }
      onInput={ () => onFiltersRefresh('colorIdentity', identity) }
    >
      {
        generateColorButtons(colors, setColors, t)
      }
    </ToggleButtonGroup>
  );
};

ColorIdentityInput.propTypes = {
  className: PropTypes.string,
  onFiltersRefresh: PropTypes.func,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

export default ColorIdentityInput;
