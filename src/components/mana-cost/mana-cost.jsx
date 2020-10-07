import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './mana-cost.css';

const transformManaCost = (symbolCode) => {
  const transformMapping = {
    t: 'tap',
  };

  const fittingCode = transformMapping[symbolCode];

  return fittingCode || symbolCode;
};

const ManaSymbol = ({ symbolCode = '0', className }) => {
  const classes = cn(
    styles.ms,
    styles['ms-cost'],
    styles[`ms-${transformManaCost(symbolCode.toLowerCase())}`],
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
