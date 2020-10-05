import React from 'react';
import cn from 'classnames';

import FailureIcon from '@images/failure.svg';
import styles from './error-indicator.css';

const ErrorIndicator = () => {
  const wrapperClasses = cn(
    'd-flex',
    'flex-column align-items-center',
    styles.wrapper,
  );

  return (
    <div className={ wrapperClasses }>
      <p className={ styles.description }>
        Can not load this resource
      </p>
      <FailureIcon width={ 100 } height={ 100 } />
    </div>
  );
};

export default ErrorIndicator;
