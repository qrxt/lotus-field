import React from 'react';

import styles from './loading-spinner.css';

const LoadingSpinner = () => (
  <div className={styles['petals-spinner']}>
    <div className={styles['petals-spinner-container']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingSpinner;
