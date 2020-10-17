import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
              <CardPreview card={ card }/>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

FoundCards.propTypes = {
  cards: PropTypes.array,
};

export default FoundCards;
