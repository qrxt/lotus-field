import React, { Suspense } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import reactReplace from 'react-string-replace';
import { useImage } from 'react-image';
import ModalImage from 'react-modal-image';
import { useMediaQuery } from 'react-responsive';

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
  const isLargeDevice = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const { name } = card;
  const {
    artCrop: artCropSrc,
    normal: artNormalSrc,
    large: artLargeSrc,
  } = card.imageUris;

  const { src: artCrop } = useImage({
    srcList: artCropSrc,
  });

  const { src: artLarge } = useImage({
    srcList: artLargeSrc,
  });

  return (
    <div className={ cn(styles['art-container'], 'col-md-6') } aria-hidden>
      <ModalImage
        className={ styles.art }
        small={
          isLargeDevice
            ? artLarge
            : artCrop
        }
        large={ artNormalSrc }
        alt={ `Art for "${name}" card` }
      />
    </div>
  );
};

const CardBody = ({ card, className }) => {
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
    <div className={ cn(styles.body, className) } >
      <Suspense fallback={ loadingComponent }>
        <ArtImage card={ card } />
      </Suspense>

      <div className={ cn(styles.info, 'col-md-6') }>
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
        <div className={ cn('wrapper bg-light', styles['card-texts']) }>
          <p className={ styles.text }>
            { reactReplace(text, manaCostCode, manaCostReplacer) }
          </p>

          {
            flavorText && <p className={ styles.flavor }>
              { flavorText }
            </p>
          }
        </div>
      </div>
    </div>
  );
};

CardBody.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string,
};

ArtImage.propTypes = {
  card: PropTypes.object,
  name: PropTypes.string,
  artCrop: PropTypes.string,
  normal: PropTypes.string,
  imageUris: PropTypes.array,
};

export default CardBody;
