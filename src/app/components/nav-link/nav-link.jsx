import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './nav-link.css';

const NavLink = (props) => {
  const { isCurrent, icon: faIcon, href } = props;

  const srCurrent = (
    <span className="sr-only">
      (current)
    </span>
  );

  return (
    <a className="nav-link" href={ href }>
      <FontAwesomeIcon icon={ faIcon } className={ styles.icon } />
      { isCurrent ? srCurrent : null }
      { props.children }
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.object,
  isCurrent: PropTypes.bool,
};

export default NavLink;
