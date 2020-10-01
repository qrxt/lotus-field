import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import styles from './feature-link.css';

const FeatureLink = (props) => {
  const { icon: faIcon, href } = props;
  const linkClasses = cn(
    'd-flex flex-column align-items-center',
    'btn btn-light',
    'stretched-link',
    'shadow-sm',
    styles.link,
  );

  return (
    <a
      type="button"
      className={linkClasses}
      href={href}
    >
      <Icon icon={ faIcon }/>
      {
        props.children
      }
    </a>
  );
};

FeatureLink.propTypes = {
  icon: PropTypes.object,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default FeatureLink;
