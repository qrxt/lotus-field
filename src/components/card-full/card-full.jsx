import React from 'react';
import PropTypes from 'prop-types';

//
import ManaCost from '@src/components/mana-cost';
//

import styles from './card-full.css';

const CardFull = ({ card }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
  } = card;
  const { artCrop: coverImage } = card.imageUris;

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
        <h3 className={ styles.title }>
          { name }
        </h3>
        <p className={ styles.type }>
          { type }
        </p>
      </div>
      <div className="wrapper bg-light p-2">
        <p className={ styles.text }>
          { text }
        </p>
      </div>

      <ManaCost symbolCode="g" />
    </article>
  );
};

CardFull.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardFull;
