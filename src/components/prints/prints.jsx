import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FoundCards from '@components/found-cards';
import { Link } from 'react-router-dom';

const Prints = ({ card, prints }) => {
  const { t } = useTranslation();

  if (prints.length > 10) {
    return (
      <Fragment>
        <FoundCards cards={ prints.slice(0, 10) } />
        <Link className="w-100 btn btn-primary" to={
          `/cards?order=released\u0026q=oracleid%3A${card.oracleId}\u0026unique=prints`
        }>
          { t('pages.card.prints.link-to-other') }
        </Link>
      </Fragment>
    );
  }

  return <FoundCards cards={ prints } />;
};

Prints.propTypes = {
  card: PropTypes.object,
  prints: PropTypes.array,
};

export default Prints;
