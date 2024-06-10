import React from 'react';
import logo from '../assets/copykeeper.png';
import style from '../style/header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src={logo} alt="Copykeeper Logo" className={style.logoImg} />
        </div>
        <ul className={style.navLinks}>
          <li className={style.navItem}><a href="#" className={style.navLink}>History</a></li>
          <li className={style.navItem}><a href="#" className={style.navLink}>Tools</a></li>
          <li className={style.navItem}><a href="#" className={style.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
