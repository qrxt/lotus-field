import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CardPreview from '@components/card-preview';

import styles from './wishlist.css';

const Wishlist = ({ cards }) => {
  const { t } = useTranslation();

  return (
    <ul className={ styles['card-list'] }>
      {
        cards.map((card, index) => (
          <li className={ styles['card-item'] } key={ index }>
            <CardPreview card={ card } />
          </li>
        ))
      }
    </ul>
  );
};

Wishlist.propTypes = {
  cards: PropTypes.array,
};

export default Wishlist;
