import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

import CardPreview from '@components/card-preview';
import styles from './recent-cards.css';

const RecentCards = ({ cards }) => {
  const { t } = useTranslation();
  const wrapperClasses = cn(
    'wrapper',
    styles.wrapper,
  );

  return (
    <div className={ wrapperClasses }>
      <h3 className={ styles.title }>
        { t('pages.main.recent.title') }
      </h3>
      <Carousel
        interval={ null }
        wrap={ false }
        nextIcon={ null }
        prevIcon={ null }
      >
        {
          cards.slice(0, 5).map((card, idx) => (
              <Carousel.Item key={ idx }>
                <div className={ styles['cards-wrapper'] }>
                  {
                    <CardPreview card={ card } />
                  }
                </div>
              </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
};

RecentCards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default RecentCards;
