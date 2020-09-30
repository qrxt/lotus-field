import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import {
  faHome,
  faHeart,
  faSearch,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import NavLink from '@components/nav-link/nav-link.jsx';

import styles from './nav-bar.css';

const NavBar = () => {
  const navBarClasses = cn(
    'navbar navbar-expand-lg navbar-light bg-light',
    styles.navbar,
  );

  const { t } = useTranslation();

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
              { t('nav-menu.home') }
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink icon={ faHeart } href="#">
              { t('nav-menu.wishlist') }
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink icon={ faSearch } href="#">
              { t('nav-menu.search') }
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink icon={ faCog } href="#">
              { t('nav-menu.settings') }
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
