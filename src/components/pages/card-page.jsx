import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { CardFull as CardFullContainer } from '@containers';

const CardPage = ({ cardId }) => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="visually-hidden">
        { t('pages.card.h2') }
      </h2>
      <CardFullContainer cardId={ cardId } />
    </section>
  );
};

CardPage.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CardPage;
