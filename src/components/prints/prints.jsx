import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FoundCards from '@components/found-cards';
import { Link } from 'react-router-dom';

import styles from './prints.css';

const Prints = ({ card, prints, className }) => {
  const { t } = useTranslation();

  if (prints.length > 10) {
    return (
      <div className={ className }>
        <FoundCards cards={ prints.slice(0, 10) } />
        <Link
          className={ cn('btn btn-primary mb-3', styles['more-button']) }
          to={
            `/cards?order=released\u0026q=oracleid%3A${card.oracleId}\u0026unique=prints`
          }
        >
          { t('pages.card.prints.link-to-other') }
        </Link>
      </div>
    );
  }

  return <div className={ className }><FoundCards cards={ prints } /></div>;
};

Prints.propTypes = {
  card: PropTypes.object,
  prints: PropTypes.array,
  className: PropTypes.string,
};

export default Prints;
