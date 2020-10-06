import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './mana-cost.css';

const ManaSymbol = ({ symbolCode = '0' }) => {
  const classes = cn(
    styles.ms,
    styles['ms-cost'],
    styles[`ms-${symbolCode}`],
  );

  return (
    <i className={ classes }></i>
  );
};

ManaSymbol.propTypes = {
  symbolCode: PropTypes.string.isRequired,
};

export default ManaSymbol;
