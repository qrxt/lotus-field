import React from 'react';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';
import cn from 'classnames';
import ModalImage from 'react-modal-image';

import ManaCost from '@components/mana-cost';

import styles from './card-body.css';

const manaCostCode = /\{(.*?)\}/gm;
const manaCostReplacer = (match, index) => (
  <ManaCost className={ styles['mana-cost'] } symbolCode={ match } key={ index } />
);

const CardBody = ({ card }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
    flavorText,
    manaCost,
    imageUris,
  } = card;
  const { artCrop, normal: artNormal } = imageUris;

  return (
    <div className={ styles.body }>
      <ModalImage
        className={ styles.art }
        small={ artCrop }
        large={ artNormal }
        alt={ `Art for "${name}" card` }
      />
      <div className="wrapper">
        <header className="d-flex flex-wrap align-items-center">

          <h3 className={ styles.title }>
            { name }
          </h3>
          {
            manaCost && <p className={ styles['card-cost'] }>
              { reactReplace(manaCost, manaCostCode, manaCostReplacer) }
            </p>
          }
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
    </div>
  );
};

CardBody.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardBody;
