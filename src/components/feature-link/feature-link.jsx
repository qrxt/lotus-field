import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './feature-link.css';

const FeatureLink = (props) => {
  const { icon: faIcon, to } = props;
  const linkClasses = cn(
    'd-flex flex-column align-items-center py-3',
    'btn btn-light',
    'shadow-sm',
    styles.link,
  );

  return (
    <Link className={linkClasses} to={to}>
      <Icon icon={ faIcon } className="fa-lg" />
      <span className={styles['link-text']}>
        {
          props.children
        }
      </span>
    </Link>
  );
};

FeatureLink.defaultProps = {
  to: '#',
};

FeatureLink.propTypes = {
  icon: PropTypes.object,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default FeatureLink;
