import React, { Fragment } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './prices.css';

const Prices = ({ prices }) => {
  const { t } = useTranslation();
  const priceEntries = Object.entries(prices)
    .filter(([, cost]) => cost);

  return (
    <dl className={ cn('row', styles['price-row']) }>
      <dt className="col-5 bg-light">{ t('pages.card.prices.currency') }</dt>
      <dd className="col-7">{ t('pages.card.prices.cost') }</dd>
      {
        priceEntries.map(([currency, cost], idx) => (
          <Fragment key={ idx }>
            <dt className="col-5 bg-light">{ t(`currencies.${currency}`) }</dt>
            <dd className="col-7">{ cost }</dd>
          </Fragment>
        ))
      }
    </dl>
  );
};

Prices.propTypes = {
  prices: PropTypes.object,
};

export default Prices;
