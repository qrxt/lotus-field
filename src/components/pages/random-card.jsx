import React from 'react';
import { useTranslation } from 'react-i18next';

const RandomCardPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="visually-hidden">
        { t('pages.random.h2') }
      </h2>
    </section>
  );
};

export default RandomCardPage;
