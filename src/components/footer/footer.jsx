import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import IconVk from '@images/vk.svg';
import IconTg from '@images/tg.svg';
import styles from './footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={ cn(styles.footer, 'bg-light') }>
      <div className={ cn('wrapper container', styles.inner) }>
        <section className={ styles.rights }>
          <h3 className={ styles['rights-title'] }>
            { t('footer.rights.title') }
          </h3>
          <p className={ styles['rights-text'] }>
            { t('footer.rights.text') }
          </p>
        </section>

        <section className={ styles.contacts }>
          <h3 className="visually-hidden">
            { t('footer.contacts.title') }
          </h3>
          <ul className={ styles.['contacts-list'] }>
            <li className={ styles.contact }>
              <a
                className={ styles.['contact-link'] }
                href="https://vk.com/id106399922"
                aria-label={ t('footer.contacts.vk') }
              >
                <IconVk width="48" height="48" className={ styles.['social-icon'] } />
              </a>
            </li>

            <li className={ styles.contact }>
              <a
                className={ styles.['contact-link'] }
                href="https://telegram.me/qrxt357"
                aria-label={ t('footer.contacts.tg') }
              >
                <IconTg width="48" height="48" className={ styles.['social-icon'] } />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
