import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_wrapper}>
                <img src='../src/assets/logo.png' alt="logo" srcset="" />
            </div>
            <div className={styles.nav_buttons_wrapper}>
                <button className={styles.nav_button_bordered}>О нас</button>
                <button className={styles.nav_button}>Услуги</button>
                <button className={styles.nav_button}>Аренда</button>
            </div>
            <div className={styles.communication_button_wrapper}>
                <button className={styles.communication_button}>Связаться</button>
            </div>
        </div>
    );
};

export default Header;