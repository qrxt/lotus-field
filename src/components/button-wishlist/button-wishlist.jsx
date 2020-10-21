import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import styles from './button-wishlist.css';

const ButtonWishlist = ({ className, isLittle, onClick, disabled }) => {
  const { t } = useTranslation();

  if (isLittle) {
    return (
      <Button
        variant={
          cn(
            className,
            'outline-primary',
            styles['wishlist-button'],
            styles['button-little'],
          )
        }
        size="lg"
        disabled={ disabled }
        onClick={ onClick }
      >
        <Icon className={
          styles['heart-icon'] }
          icon={ faHeart }
          color="#f15eaf"
        />
      </Button>
    );
  }

  return (
    <Button
      variant={
        cn(
          className,
          'outline-primary',
          styles['wishlist-button'],
        )
      }
      size="lg"
      disabled={ disabled }
      onClick={ onClick }
    >
      <Icon className={ styles['heart-icon'] } icon={ faHeart } color="#f15eaf" />
      { t('buttons.add-to-wishlist') }
    </Button>
  );
};

ButtonWishlist.propTypes = {
  className: PropTypes.string,
  isLittle: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ButtonWishlist;
