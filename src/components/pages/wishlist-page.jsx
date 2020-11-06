import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Wishlist as WishlistContainer } from '@containers';

import styles from './pages.css';

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <section className={ cn('wrapper container', styles['page-wrapper']) }>
      <h2 className={ styles.title }>
        { t('pages.wishlist.h2') }
      </h2>

      <WishlistContainer />
    </section>
  );
};

export default SearchPage;
