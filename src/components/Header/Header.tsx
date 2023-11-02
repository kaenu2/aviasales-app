import React from 'react';

import styles from './header.module.scss';
const Header = () => {
  return (
    <div className={styles['header-layout']}>
      <a href="#">
        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="" />
      </a>
    </div>
  );
};

export default Header;
