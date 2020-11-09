import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './rulings.css';

const Rulings = ({ rulings, className }) => (
  <ul className={ cn(styles.rulings, className) }>
    {
      rulings.map(({ comment, publishedAt }, index) => (
        <li key={ index } className={ styles.item }>
          <p className={ styles.ruling }>
            <span className={ styles['ruling-date'] }>
              { publishedAt }
            </span>: { comment }
          </p>
        </li>
      ))
    }
  </ul>
);

Rulings.propTypes = {
  rulings: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Rulings;
