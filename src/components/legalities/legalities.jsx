import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './legalities.css';

const Legalities = ({ legalitiesList }) => {
  const { t } = useTranslation();
  const legalitiesEntries = Object.entries(legalitiesList);

  return (
    <dl className="d-flex flex-wrap justify-content-between p-0 col-md-5">
    {
      legalitiesEntries.map(([name, legality], index) => {
        const legalityClass = cn(
          {
            'not-legal': legality === 'not_legal',
            legal: legality === 'legal',
            restricted: legality === 'restricted',
            banned: legality === 'banned',
          },
        );

        return (
          <div className={ cn('w-50', styles['legality-group']) } key={ index }>
            <dt className={ styles.format }>
              { t(`formats.${name}`) }
            </dt>
            <dd className={ cn(styles.legality, styles[legalityClass]) }>
              { t(`legalities.${legality}`) }
            </dd>
          </div>
        );
      })
    }
    </dl>
  );
};

Legalities.propTypes = {
  legalitiesList: PropTypes.object.isRequired,
};

export default Legalities;

// const { t } = useTranslation();
