import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';
import { useTranslation } from 'react-i18next';

import ManaCost from '@components/mana-cost';
import Legalities from '@components/legalities';
import styles from './card-full.css';

const manaCostCode = /\{(.*?)\}/gm;
const manaCostReplacer = (match, index) => (
  <ManaCost className={ styles['mana-cost'] } symbolCode={ match } key={ index } />
);

const CardFull = ({ card }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
    flavorText,
    manaCost: cardCost,
    legalities: legalitiesList,
  } = card;
  const { artCrop: coverImage } = card.imageUris;
  const { t } = useTranslation();

  return (
    <article>
      <img
        width="320"
        height="180"
        className={ styles.art }
        src={ coverImage }
        alt={ `Art for "${name}" card` }
      />
      <div className="wrapper">
        <header className="d-flex align-items-center">
          <h3 className={ styles.title }>
            { name }
          </h3>
          <p className={ styles['card-cost'] }>
            { reactReplace(cardCost, manaCostCode, manaCostReplacer) }
          </p>
        </header>
        <p className={ styles.type }>
          { type }
        </p>
      </div>
      <div className={ cn('wrapper bg-light py-2', styles['card-texts']) }>
        <p className={ styles.text }>
          { reactReplace(text, manaCostCode, manaCostReplacer) }
        </p>

        <p className={ styles.flavor }>
          { flavorText }
        </p>
      </div>

      <div className="wrapper ">
        <p className={ styles['legalities-caption'] }>
          { t('pages.card.legalities') }
        </p>

        <Legalities legalitiesList={ legalitiesList } />
      </div>
    </article>
  );
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardFull;
