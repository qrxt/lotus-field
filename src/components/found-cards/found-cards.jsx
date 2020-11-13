import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';

import CardBack from '@components/card-back';
import CardPreview from '@components/card-preview';

import IconNotFound from '@images/not-found.svg';
import styles from './found-cards.css';

const wrappedWithLazy = (card) => (
  <LazyLoad placeholder={ <CardBack /> } offset={ 568 }>
    <CardPreview card={ card } />
  </LazyLoad>
);

const FoundCards = ({ cards, lazy }) => {
  const { t } = useTranslation();

  if (!cards.length) {
    return (
      <div className={ styles['no-cards'] }>
        <IconNotFound width={ 136 } height={ 148 } />
        <p>
          {
            t('pages.found-cards.no-cards')
          }
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <p>
        {
          `${cards.length} ${t('pages.found-cards.cards-found-quantity')}`
        }
      </p>
      <ul className={ cn(styles['card-list'], 'col-12') }>
        {
          cards.map((card, index) => (
            <li className={ styles['card-item'] } key={ index }>
              {
                lazy
                  ? wrappedWithLazy(card)
                  : <CardPreview card={ card } />
              }
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

FoundCards.defaultProps = {
  lazy: true,
};

FoundCards.propTypes = {
  cards: PropTypes.array,
  cardAddedToWishlist: PropTypes.func,
  lazy: PropTypes.bool,
};

export default FoundCards;
