import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import ListItemStyles from './ListItem/ListItem.module.scss';

const ListWrapper = ({ items }) => {
    const handleClickAnswer = (e, correctAnswer) => {
        if (e.target.innerText.toLowerCase() === correctAnswer) {
            return e.target.className = ListItemStyles.correct
        }

        e.target.className = ListItemStyles.wrong
    }

    return (
        <ul className={styles.listWrapper}>
            {items.map((item, step) => (
                <ListItem
                    key={item.question.slice(0, 10) + step}
                    onClickFn={handleClickAnswer}
                    {...item}
                />
            ))}
        </ul> 
    )
}

export default ListWrapper