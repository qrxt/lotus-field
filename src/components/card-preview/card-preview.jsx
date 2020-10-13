import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './card-preview.css';

const CardPreview = ({ card }) => {
  const { name, cardFaces } = card;
  const [firstFace] = cardFaces;
  const { normal } = firstFace.imageUris;

  return (
    <Link to={ `/card/${card.id}` }>
      <img
        className={ styles.card }
        src={ normal }
        alt={ name }
        width={ 137 }
        height={ 197 }
      />
    </Link>
  );
};

CardPreview.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardPreview;
