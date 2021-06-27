import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

function HeaderNavigation() {
    return (
        <nav>
            <ul className={styles.wrapper}>
                <li className={styles.navItem}>
                    <NavLink exact
                        activeClassName={styles.navItemLinkActive}
                        className={styles.navItemLink}
                        to='/czasu'>
                        Czasu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={styles.navItemLinkActive}
                        className={styles.navItemLink}
                        to='/miejsca'
                    >
                        Miejsca
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation
