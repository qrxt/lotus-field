import React from 'react';
import PropTypes from 'prop-types';

import styles from './rulings.css';

const Rulings = ({ rulings }) => (
  <ul className={ styles.rulings }>
    {
      rulings.map(({ comment, publishedAt }, index) => (
        <li key={ index }>
          <p className={ styles.ruling }>
            <span className={ styles['ruling-date'] }>{ publishedAt }</span>: { comment }
          </p>
        </li>
      ))
    }
  </ul>
);

Rulings.propTypes = {
  rulings: PropTypes.array.isRequired,
};

export default Rulings;
