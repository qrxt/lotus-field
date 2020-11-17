import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FoundCards from '@components/found-cards';
import { Link, withRouter } from 'react-router-dom';

import styles from './prints.css';

const Prints = (props) => {
  const {
    card,
    printsSearchResult,
    className,
    location,
  } = props;
  const { t } = useTranslation();

  const { data: prints } = printsSearchResult;

  if (prints.length > 10) {
    return (
      <div className={ className }>
        <FoundCards
          location={ location }
          searchResult={ { ...printsSearchResult, data: prints.slice(0, 10) } }
        />
        <Link
          className={ cn('btn btn-primary mb-3', styles['more-button']) }
          to={
            `/cards?order=released\u0026page=1\u0026q=oracleid%3A${card.oracleId}\u0026unique=prints`
          }
        >
          { t('pages.card.prints.link-to-other') }
        </Link>
      </div>
    );
  }

  return (
    <div className={ className }>
      <FoundCards location={ location } searchResult={ printsSearchResult } />
    </div>
  );
};

Prints.propTypes = {
  card: PropTypes.object,
  printsSearchResult: PropTypes.object,
  className: PropTypes.string,
  location: PropTypes.object,
};

export default withRouter(Prints);
