import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={ cn(styles.footer, 'bg-light') }>
      <div className={ 'wrapper' }>
        <p className={ styles['rights-title'] }>
          { t('footer.rights.title') }
        </p>
        <p className={ styles.rights }>
          { t('footer.rights.text') }
        </p>
      </div>
    </footer>
  );
};

export default Footer;
