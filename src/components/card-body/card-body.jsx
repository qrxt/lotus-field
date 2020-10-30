import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';
import { useImage } from 'react-image';
import cn from 'classnames';
import ModalImage from 'react-modal-image';

import LoadingSpinner from '@components/loading-spinner';
import ManaCost from '@components/mana-cost';

import styles from './card-body.css';

const manaCostCode = /\{(.*?)\}/gm;
const manaCostReplacer = (match, index) => (
  <ManaCost
    className={ cn('mana', styles['mana-cost']) }
    symbolCode={ match }
    key={ index }
  />
);

export const ArtImage = ({ card }) => {
  const { name } = card;
  const { artCrop: artCropSrc, normal: artNormalSrc } = card.imageUris;

  const { src: artCrop } = useImage({
    srcList: artCropSrc,
  });

  return (
    <div aria-hidden>
      <ModalImage
        className={ styles.art }
        small={ artCrop }
        large={ artNormalSrc }
        alt={ `Art for "${name}" card` }
      />
    </div>
  );
};

const CardBody = ({ card }) => {
  const {
    name,
    typeLine: type,
    oracleText: text,
    flavorText,
    manaCost,
  } = card;

  const loadingComponent = (
    <div className="wrapper d-flex justify-content-center">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className={ styles.body }>
      <Suspense fallback={ loadingComponent }>
        <ArtImage card={ card } />
      </Suspense>

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
        <div className={ styles['type-line'] }>
          <p className={ styles.type }>
            { type }
          </p>
          {
            card.power && <p className={ styles['creature-characteristics'] }>
              { card.power }/{ card.toughness }
            </p>
          }
        </div>
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

ArtImage.propTypes = {
  card: PropTypes.object,
  name: PropTypes.string,
  artCrop: PropTypes.string,
  normal: PropTypes.string,
  imageUris: PropTypes.array,
};

export default CardBody;
