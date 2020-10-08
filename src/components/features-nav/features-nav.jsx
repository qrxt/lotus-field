import React from 'react';
import FeatureLink from '@components/feature-link';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import {
  faRandom,
} from '@fortawesome/free-solid-svg-icons';

import styles from './features-nav.css';

const FeaturesNav = () => {
  const { t } = useTranslation();
  const listClasses = cn(
    styles['nav-list'],
    'd-flex',
    'justify-content-center',
  );

  return (
    <div className={ cn('wrapper', styles['features-wrapper']) }>
      <ul className={ listClasses }>
        <li>
          <FeatureLink icon={ faRandom } to="/card/random">
            { t('features-nav.random-card') }
          </FeatureLink>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesNav;
