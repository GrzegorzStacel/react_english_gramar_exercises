import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';

const ListItem = ({ onClickFn, ...item }) => {
    const nameId = ['in', 'on', 'at']

    return (       
        <li className={styles.wrapper}>
            <p className={styles.quesion}>{item.question}</p>
            <div className={styles.answersWrapper}>
                { nameId.map(nameIdItems => (
                    <Button
                        handleOnClick={(e) => onClickFn(e, item.answer)}
                        setClassName={styles.answer}
                        id={nameIdItems}
                        >
                            {nameIdItems}
                        </Button>
                    ))
                }
            </div>
        </li>
    )
}

export default ListItem
