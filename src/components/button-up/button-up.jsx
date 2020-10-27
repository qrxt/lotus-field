import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import UpArrow from '@images/up-arrow.svg';
import styles from './button-up.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ButtonUp = () => {
  const { t } = useTranslation();
  const [isDisplayed, setDisplay] = useState(false);

  const buttonUp = (
    <button
      onClick={ () => { scrollToTop(); } }
      className={
        cn(
          styles['button-up'],
          { [styles.show]: isDisplayed },
        )
      }
      aria-label={ t('buttons.up.description') }
    >
      <UpArrow aria-hidden className={ styles['arrow-icon'] } />
    </button>
  );

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setDisplay(true);
    } else setDisplay(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      toggleVisibility();
    });
  });

  return buttonUp;
};

export default ButtonUp;
