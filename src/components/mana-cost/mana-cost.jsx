import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './mana-cost.css';

const transformManaCost = (symbolCode) => {
  const transformMapping = {
    t: 'tap',
  };

  const transformed = transformMapping[symbolCode] || symbolCode;

  return transformed
    .toLowerCase()
    .replace(/\//g, '');
};

const ManaSymbol = ({ symbolCode = '0', className }) => {
  const classes = cn(
    styles.ms,
    styles['ms-cost'],
    styles[`ms-${transformManaCost(symbolCode)}`],
    className,
  );

  return (
    <span className={ classes }></span>
  );
};

ManaSymbol.propTypes = {
  symbolCode: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ManaSymbol;
