import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

import styles from './nav-link.css';

const NavLink = (props) => {
  const {
    isCurrent,
    icon: faIcon,
    to,
    eventKey,
  } = props;

  const srCurrent = (
    <span className="sr-only">
      (current)
    </span>
  );

  return (
    <Nav.Link
      as={ Link }
      className={ cn(
        'nav-link',
        styles.link,
      ) }
      to={ to }
      eventKey={ eventKey }
    >
      { faIcon ? <Icon icon={ faIcon } className={ styles.icon } /> : null }
      { isCurrent ? srCurrent : null }
      { props.children }
    </Nav.Link>
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
  eventKey: PropTypes.string,
};

export default NavLink;
