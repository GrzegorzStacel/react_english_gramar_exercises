import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <h1 className={styles.logo}>Przyimki</h1>
            <HeaderNavigation />
        </header>
    )
}

export default Header
