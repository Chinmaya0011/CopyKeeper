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
          <li className={style.navItem}><a href="#" className={style.navLink}>Nav Item 1</a></li>
          <li className={style.navItem}><a href="#" className={style.navLink}>Nav Item 2</a></li>
          <li className={style.navItem}><a href="#" className={style.navLink}>Nav Item 3</a></li>
        </ul>
      </nav>
    </header>
  );
};
