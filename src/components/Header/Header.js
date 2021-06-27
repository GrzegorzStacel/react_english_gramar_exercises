import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
                Przyimki
            </Link>
            <HeaderNavigation />
        </header>
    )
}

export default Header
