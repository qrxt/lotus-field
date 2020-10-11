import React from 'react';
import FeaturesNav from '@components/features-nav';
import RecentCards from '@containers/recent-cards/recent-cards.jsx';
import { useTranslation } from 'react-i18next';

const RandomCardPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="visually-hidden">
        { t('pages.main.h2') }
      </h2>
      <RecentCards />
      <FeaturesNav />
    </section>
  );
};

export default RandomCardPage;
