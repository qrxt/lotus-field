import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { useImage } from 'react-image';
import ModalImage from 'react-modal-image';
import { useMediaQuery } from 'react-responsive';
import CardFlip from 'react-card-flip';

import IconFlip from '@images/flip.svg';
import styles from './art-image.css';

const ButtonFlip = ({ onClick }) => {
  const { t } = useTranslation();
  // translation

  return (
    <button className={ cn(styles['btn-flip'], 'btn btn-primary') } onClick={ () => onClick() }>
      <IconFlip width="24" height="24" fill="white" className={ styles['icon-flip'] } />
      { t('buttons.flip.description') }
    </button>
  );
};

const LargeArt = ({ card, back }) => {
  const [isFlipped, setFlip] = useState(false);

  const { large: artLargeSrc } = card.imageUris;
  const { src: artLarge } = useImage({
    srcList: artLargeSrc,
  });

  const onClick = () => {
    setFlip((prev) => !prev);
  };

  return back && card.imageUris.large !== back.imageUris.large
    ? (
      <CardFlip isFlipped={ isFlipped } flipSpeedBackToFront={ 1 } flipSpeedFrontToBack={ 1 }>
        <div className="d-flex flex-column align-items-center">
          <img
            src={ artLarge }
            className={ styles.art }
            alt={ `Art for "${card.name}" card` }
          />
          <ButtonFlip onClick={ () => onClick() } />
        </div>

        <div className="d-flex flex-column align-items-center">
          <img
            src={ back.imageUris.large }
            className={ styles.art }
            alt={ `Art for "${back.name}" card` }
          />
          <ButtonFlip onClick={ () => onClick() } />
        </div>
      </CardFlip>
    )
    : (
      <img
        src={ artLarge }
        className={ styles.art }
        alt={ `Art for "${card.name}" card` }
      />
    );
};

const ArtImage = ({ card, back }) => {
  const isLargeDevice = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const { name } = card;
  const {
    artCrop: artCropSrc,
    normal: artNormalSrc,
  } = card.imageUris;

  const { src: artCrop } = useImage({
    srcList: artCropSrc,
  });

  return (
    <div className={ cn(styles['art-container'], 'col-md-6 col-xl-4') } aria-hidden>
      {
        isLargeDevice
          ? <LargeArt card={ card } back={ back } />
          : (
            <ModalImage
              className={ styles.art }
              small={ artCrop }
              large={ artNormalSrc }
              alt={ `Art for "${name}" card` }
            />
          )
      }
    </div>
  );
};

ArtImage.propTypes = {
  card: PropTypes.object,
  back: PropTypes.object,

  name: PropTypes.string,
  artCrop: PropTypes.string,
  normal: PropTypes.string,
  imageUris: PropTypes.array,
};

LargeArt.propTypes = {
  card: PropTypes.object,
  back: PropTypes.object,
  imageUris: PropTypes.array,
};

ButtonFlip.propTypes = {
  onClick: PropTypes.func,
};

export default ArtImage;
