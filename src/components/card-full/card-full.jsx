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

import styles from './card-full.css';

const CardFull = ({ card, cardAddedToWishlist }) => {
  const {
    legalities,
    rulings,
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

  const handleWishlistButtonClick = () => {
    cardAddedToWishlist(card.id);
  };

  console.log(styles['something']);

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
          className={ styles['something'] }
          onClick={ handleWishlistButtonClick }
          disabled={ !card }
        />
      </div>
    </article>
  );
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
  cardAddedToWishlist: PropTypes.func,
};

export default CardFull;
