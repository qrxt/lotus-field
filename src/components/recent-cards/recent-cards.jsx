import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

import CardPreview from '@components/card-preview';
import ClockIcon from '@images/clock.svg';
import styles from './recent-cards.css';

const RecentCards = ({ cards }) => {
  const { t } = useTranslation();
  const wrapperClasses = cn(
    'wrapper',
    styles.wrapper,
  );

  if (!cards.length) {
    return (
      <div className={ styles['no-cards'] }>
        <ClockIcon className={ styles['icon-clock'] } />
        <p>
          { t('pages.main.recent.no-cards') }
        </p>
      </div>
    );
  }

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
        className={ styles.carousel }
      >
        {
          cards.slice(0, 5).map((card, idx) => (
              <Carousel.Item key={ idx } className={ styles['carousel-item'] } >
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
