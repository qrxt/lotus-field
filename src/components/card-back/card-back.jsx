import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import imgCardBack from '@images/back.jpg';

const CardBack = ({ className }) => {
  const { t } = useTranslation();

  return (
    <img
      className={ className }
      alt={ t('cards.placeholder.alt') }
      src={ imgCardBack }
    />
  );
};

CardBack.propTypes = {
  className: PropTypes.string,
};

export default CardBack;
