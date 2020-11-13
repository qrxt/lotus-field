import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { SearchForm as SearchFormContainer } from '@containers';

import styles from './pages.css';

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <section className={ cn('wrapper container', styles['page-wrapper']) }>
      <h2 className="visually-hidden">
        { t('pages.search.h2') }
      </h2>

      <SearchFormContainer />
    </section>
  );
};

export default SearchPage;
