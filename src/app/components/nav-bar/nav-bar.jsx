import React from 'react';
import { faHome, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './nav-bar.css';

import NavLink from '../nav-link/nav-link.jsx';

const NavBar = () => {
  const navBarClasses = cn(
    'navbar navbar-expand-lg navbar-light bg-light',
    styles.navbar,
  );

  return (
    <nav className={ navBarClasses }>
      <a className="navbar-brand" href="#">
        <img
          src="./img/lotus.png"
          className={styles.logo}
          width="48"
          height="48"
          alt="Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink icon={ faHome } href="#" isCurrent>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink icon={ faHeart } href="#">
              Wishlist
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink icon={ faSearch } href="#">
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
