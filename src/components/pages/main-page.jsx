import React from 'react';
import FeaturesNav from '@components/features-nav';
import { RecentCards } from '@containers';
import { useTranslation } from 'react-i18next';

import styles from './pages.css';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <section className={ styles['page-wrapper'] }>
      <h2 className="visually-hidden">
        { t('pages.main.h2') }
      </h2>
      <RecentCards />
      <FeaturesNav />
    </section>
  );
};

export default MainPage;
