import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './nav-link.css';

const NavLink = (props) => {
  const { isCurrent, icon: faIcon, to } = props;

  const srCurrent = (
    <span className="sr-only">
      (current)
    </span>
  );

  return (
    <Link className="nav-link" to={ to }>
      <Icon icon={ faIcon } className={ styles.icon } />
      { isCurrent ? srCurrent : null }
      { props.children }
    </Link>
  );
};

NavLink.defaultProps = {
  to: '#',
};

NavLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.object,
  isCurrent: PropTypes.bool,
};

export default NavLink;
