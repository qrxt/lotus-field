import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';

import CardBack from '@components/card-back';
import CardPreview from '@components/card-preview';

import styles from './found-cards.css';

const FoundCards = ({ cards }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <p>
        {
          `${cards.length} ${t('pages.found-cards.cards-found-quantity')}`
        }
      </p>
      <ul className={ styles['card-list'] }>
        {
          cards.map((card, index) => (
            <li className={ styles['card-item'] } key={ index }>
              <LazyLoad placeholder={ <CardBack /> } offset={ 568 }>
                <CardPreview card={ card } />
              </LazyLoad>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

FoundCards.propTypes = {
  cards: PropTypes.array,
  cardAddedToWishlist: PropTypes.func,
};

export default FoundCards;
