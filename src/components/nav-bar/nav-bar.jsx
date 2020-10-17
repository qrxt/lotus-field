import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  faHome,
  faHeart,
  faSearch,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from '@components/nav-link/nav-link.jsx';
import { Link } from 'react-router-dom';

import logo from '@images/lotus.png';
import styles from './nav-bar.css';

const MyNavbar = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={ logo }
            className={ styles.logo }
            width="48"
            height="48"
            alt="Logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink icon={ faHome } to="/" isCurrent>
                { t('nav-menu.home') }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink icon={ faHeart } to="#">
                { t('nav-menu.wishlist') }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink icon={ faSearch } to="/search">
                { t('nav-menu.search') }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink icon={ faCog } to="/settings">
                { t('nav-menu.settings') }
              </NavLink>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
