import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.css';

const Card = (props) => {
  const { imgUrl, name, href } = props;

  return (
    <a href={href} className={styles.link}>
      <img src={imgUrl} width="146" height="204" alt={name} />
    </a>
  );
};

Card.defaultProps = {
  href: '#',
};

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Card;
