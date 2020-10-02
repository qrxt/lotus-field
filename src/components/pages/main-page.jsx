import React from 'react';
import FeaturesNav from '@components/features-nav';
import { useTranslation } from 'react-i18next';

const RandomCardPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="visually-hidden">
        { t('pages.main.h2') }
      </h2>
      <FeaturesNav />
    </section>
  );
};

export default RandomCardPage;
