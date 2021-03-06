import React, { Suspense } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import Carousel from 'react-bootstrap/Carousel';

import ButtonWishlist from '@components/button-wishlist';
import AccordionWrapper from '@components/accordion-wrapper';
import CardBody from '@components/card-body';
import Legalities from '@components/legalities';
import Rulings from '@components/rulings';
import Prices from '@components/prices';
import Prints from '@components/prints';
import ArtImage from '@components/art-image';
import LoadingSpinner from '@components/loading-spinner';

import styles from './card-full.css';

const loadingComponent = (
  <div className="wrapper d-flex justify-content-center">
    <LoadingSpinner />
  </div>
);

const CardFull = (props) => {
  const isMediumDeviceOrLarger = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLargeDevice = useMediaQuery({
    query: '(min-width: 1200px)',
  });

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
      body: <Legalities legalitiesList={ legalities } className={ styles.legalities } />,
      include: true,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.rulings') }
        </p>
      ),
      body: <Rulings rulings={ rulings } className={ cn('col-md-12', styles.rulings) } />,
      include: rulings.length > 0,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.prints.title') }
        </p>
      ),
      body: <Prints
        card={ card }
        printsSearchResult={ prints }
        className={ cn('col-md-12 p-0', styles.prints) }
      />,
      include: prints.data.length > 0,
    },

    {
      caption: (
        <p className={ styles['additional-caption'] }>
          { t('pages.card.prices.title') }
        </p>
      ),
      body: <Prices prices={ prices } className={ cn(styles.prices, 'col-md-7') } />,
      include: Object.values(prices).filter(Boolean).length > 0,
    },
  ];

  const preparedEntries = additionalEntries
    .filter(({ include }) => include);

  const multifaced = (
    isLargeDevice
      ? (
        <div className={ cn('d-flex', styles['bodies-wrapper']) }>
          <Suspense fallback={ loadingComponent }>
            <ArtImage card={ cardFaces[0] } back={ cardFaces[1] } />
          </Suspense>
          <div className={ styles.bodies }>
            {
              cardFaces.map((cardFace, idx) => (
                <CardBody card={ cardFaces[idx] } displayArt={ false } key={ idx } />
              ))
            }
          </div>
        </div>
      )
      : (
        <Carousel
          interval={ null }
          wrap={ false }
          nextIcon={ null }
          prevIcon={ null }
          className="row col-12 m-0 p-0"
        >
          {
            cardFaces.map((face, index) => (
              <Carousel.Item key={ index }>
                <CardBody card={ face } />
              </Carousel.Item>
            ))
          }
        </Carousel>
      )
  );

  return (
    <article className={ cn(styles.card, 'container-sm') }>
      <div className={ cn(styles.inner, 'col-12') }>
        {
          cardFaces.length > 1
            ? multifaced
            : (
              <div className={ cn(styles['bodies-wrapper'], 'row col-xl-12') }>
                <CardBody card={ card.cardFaces[0] } className={ cn('col-xl-12') } />
              </div>
            )
        }
        {
          isMediumDeviceOrLarger
            ? preparedEntries.map((entry, idx) => (
              <React.Fragment key={ idx }>{ entry.body }</React.Fragment>
            ))
            : <AccordionWrapper entries={ preparedEntries } className={ cn('mb-3 row col-12 m-0 p-0') } />
        }
      </div>
      <ButtonWishlist
        className={ styles['button-wishlist'] }
        isToggled={ wishlistCardIds.includes(card.id) }
        onEnable={ () => { cardAddedToWishlist(card.id); } }
        onDisable={ () => { cardRemovedFromWishlist(card.id); } }
        disabled={ !card }
      />
    </article>
  );
};

CardFull.defaultProps = {
  wishlistCardIds: [],
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
  cardAddedToWishlist: PropTypes.func,
  cardRemovedFromWishlist: PropTypes.func,
  wishlistCardIds: PropTypes.array,
};

export default CardFull;
