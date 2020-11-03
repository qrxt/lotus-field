import React from 'react';
import cn from 'classnames';

import FailureIcon from '@images/failure.svg';
import { useTranslation } from 'react-i18next';
import styles from './error-indicator.css';

const ErrorIndicator = () => {
  const wrapperClasses = cn(
    'd-flex',
    'flex-column align-items-center',
    styles.wrapper,
  );
  const { t } = useTranslation();

  return (
    <div className={ wrapperClasses } data-testid="error-indicator">
      <p className={ styles.description }>
        { t('error-indicator.text') }
      </p>
      <FailureIcon width={ 100 } height={ 100 } />
    </div>
  );
};

export default ErrorIndicator;
