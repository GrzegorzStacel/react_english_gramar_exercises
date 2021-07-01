import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/czasu' className={styles.bigNav}>
                Przyimki Czasu
            </Link>
            <Link to='/miejsca' className={styles.bigNav}>
                Przyimki Miejsca
            </Link>
        </div>
    )
}

export default Main