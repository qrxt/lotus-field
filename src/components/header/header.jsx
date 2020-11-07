import React from 'react';
import cn from 'classnames';

import NavBar from '@components/nav-bar';

import styles from './header.css';

const Header = () => (
  <header className={ cn('main-header', styles.header) }>
    <NavBar />
  </header>
);

export default Header;
