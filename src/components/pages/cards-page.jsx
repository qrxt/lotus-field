import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { FoundCards as FoundCardsContainer } from '@containers';

import styles from './pages.css';

const CardsPage = () => {
  const { t } = useTranslation();

  return (
    <section className={ cn('wrapper', styles['page-wrapper']) }>
      <h2>
        { t('pages.found-cards.h2') }
      </h2>
      <FoundCardsContainer />
    </section>
  );
};

CardsPage.propTypes = {
  queryString: PropTypes.string.isRequired,
};

export default CardsPage;
