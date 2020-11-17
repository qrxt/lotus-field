import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';

import CardBack from '@components/card-back';
import CardPreview from '@components/card-preview';

import IconNotFound from '@images/not-found.svg';
import styles from './found-cards.css';

const wrappedWithLazy = (card) => (
  <LazyLoad placeholder={ <CardBack /> } offset={ 568 }>
    <CardPreview card={ card } />
  </LazyLoad>
);

const FoundCards = (props) => {
  const { t } = useTranslation();
  const { searchResult, lazy } = props;
  const { data: cards } = searchResult;
  const parsedSearch = queryString.parse(props.location.search);
  const { page } = parsedSearch;
  const nextPageQueryString = queryString.stringify({ ...parsedSearch, page: Number(page) + 1 });
  const prevPageQueryString = queryString.stringify({ ...parsedSearch, page: Number(page) - 1 });

  if (!cards.length) {
    return (
      <div className={ styles['no-cards'] }>
        <IconNotFound width={ 136 } height={ 148 } />
        <p>
          {
            t('pages.found-cards.no-cards')
          }
        </p>
      </div>
    );
  }

  const btnPrev = (
    <Link
      className={ cn('btn btn-primary mr-3', styles['prev-button']) }
      to={ `/cards?${prevPageQueryString}` }
    >
      { t('buttons.found-cards.previous') }
    </Link>
  );

  const btnNext = (
    <Link
      className={ cn('btn btn-primary', styles['next-button']) }
      to={ `/cards?${nextPageQueryString}` }
    >
      { t('buttons.found-cards.next') }
    </Link>
  );

  return (
    <React.Fragment>
      <p>
        {
          `${cards.length} ${t('pages.found-cards.cards-found-quantity')}`
        }
      </p>
      <ul className={ cn(styles['card-list'], 'col-12') }>
        {
          cards.map((card, index) => (
            <li
              className={ cn(styles['card-item'], 'col-6 col-sm-5 col-md-4 col-lg-3 mb-2') }
              key={ index }
            >
              {
                lazy
                  ? wrappedWithLazy(card)
                  : <CardPreview card={ card } />
              }
            </li>
          ))
        }
      </ul>
      <div className={ cn('d-flex', styles['pagination-wrapper']) }>
      { page && page > 1 && btnPrev }
      { page && searchResult.hasMore && btnNext }
      </div>
    </React.Fragment>
  );
};

FoundCards.defaultProps = {
  lazy: true,
};

FoundCards.propTypes = {
  location: PropTypes.object,
  searchResult: PropTypes.object,
  cards: PropTypes.array,
  cardAddedToWishlist: PropTypes.func,
  lazy: PropTypes.bool,
};

export default FoundCards;
