import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import SettingsForm from '@components/settings-form';

import styles from './pages.css';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <section className={ cn('wrapper container', styles['page-wrapper']) }>
      <h2>
        { t('pages.settings.h2') }
      </h2>

      <SettingsForm />
    </section>
  );
};

export default SettingsPage;
