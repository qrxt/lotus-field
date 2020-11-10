import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { useImage } from 'react-image';
import ModalImage from 'react-modal-image';
import { useMediaQuery } from 'react-responsive';

import styles from './art-image.css';

const ArtImage = ({ card }) => {
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
    <div className={ cn(styles['art-container'], 'col-md-6 col-xl-4') } aria-hidden>
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

ArtImage.propTypes = {
  card: PropTypes.object,
  name: PropTypes.string,
  artCrop: PropTypes.string,
  normal: PropTypes.string,
  imageUris: PropTypes.array,
};

export default ArtImage;
