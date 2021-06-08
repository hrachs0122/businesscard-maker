import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && ( // onLogout 에서 true로 바꿔줌
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
