import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import styles from './button-wishlist.css';

const ButtonWishlist = (props) => {
  const {
    className,
    onEnable,
    onDisable,
    disabled,
    isToggled,
  } = props;
  const { t } = useTranslation();

  return (
    <Button
      variant={
        cn(
          'outline-primary',
          styles['wishlist-button'],
          className,
        )
      }
      size="lg"
      disabled={ disabled }
      onClick={ isToggled ? onDisable : onEnable }
      active={ isToggled }
    >
      <Icon className={ styles['heart-icon'] } icon={ faHeart } color="#f15eaf" />
      {
        isToggled
          ? t('buttons.wishlist.remove-from-wishlist')
          : t('buttons.wishlist.add-to-wishlist')
      }
    </Button>
  );
};

ButtonWishlist.propTypes = {
  className: PropTypes.string,
  isLittle: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isToggled: PropTypes.bool,
  onEnable: PropTypes.func,
  onDisable: PropTypes.func,
};

export default ButtonWishlist;
