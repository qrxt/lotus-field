import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Carousel from 'react-bootstrap/Carousel';

import ButtonWishlist from '@components/button-wishlist';
import AccordionWrapper from '@components/accordion-wrapper';
import CardBody from '@components/card-body';
import Legalities from '@components/legalities';
import Rulings from '@components/rulings';
import Prices from '@components/prices';
import Prints from '@components/prints';

import styles from './card-full.css';

const CardFull = (props) => {
  const {
    card,
    cardAddedToWishlist,
    cardRemovedFromWishlist,
    wishlistCardIds,
  } = props;
  const {
    legalities,
    rulings,
    prints,
    prices,
    cardFaces,
  } = card;

  const { t } = useTranslation();

  const additionalEntries = [
    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.legalities') }
        </p>
      ),
      body: <Legalities legalitiesList={ legalities } />,
      include: true,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.rulings') }
        </p>
      ),
      body: <Rulings rulings={ rulings } />,
      include: rulings.length > 0,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.prints.title') }
        </p>
      ),
      body: <Prints card={ card } prints={ prints } />,
      include: prints.length > 0,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.prices.title') }
        </p>
      ),
      body: <Prices prices={ prices } />,
      include: Object.keys(prices).length > 0,
    },
  ];

  const preparedEntries = additionalEntries
    .filter(({ include }) => include);

  const multifaced = (
    <Carousel
      interval={ null }
      wrap={ false }
      nextIcon={ null }
      prevIcon={ null }
    >
      {
        cardFaces.map((face, index) => (
          <Carousel.Item key={ index }>
            <CardBody card={ face } />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );

  return (
    <article className={ styles.card }>
      {
        cardFaces.length > 1
          ? multifaced
          : <CardBody card={ card.cardFaces[0] } />
      }
      <AccordionWrapper entries={ preparedEntries } className="mb-3" />
      <div className={ cn('wrapper') }>
        <ButtonWishlist
          isToggled={ wishlistCardIds.includes(card.id) }
          className={ styles['button-wishlist'] }
          onEnable={ () => { cardAddedToWishlist(card.id); } }
          onDisable={ () => { cardRemovedFromWishlist(card.id); } }
          disabled={ !card }
        />
      </div>
    </article>
  );
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
  cardAddedToWishlist: PropTypes.func,
  cardRemovedFromWishlist: PropTypes.func,
  wishlistCardIds: PropTypes.array,
};

export default CardFull;
