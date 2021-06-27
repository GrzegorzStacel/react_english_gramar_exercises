import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import ListItemStyles from './ListItem/ListItem.module.scss';

class ListWrapper extends React.Component {
    state = {
        buttonEvents: null
    }

    handleClickAnswer = (e, correctAnswer) => {
        if (e.target.innerText.toLowerCase() === correctAnswer) {
            return e.target.className = ListItemStyles.correct
        }

        e.target.className = ListItemStyles.wrong
    }

    render() {
        return (
            // <>
            <ul className={styles.listWrapper}>
                
                {this.props.items.map((item, step) => (
                    <ListItem
                        key={item.question.slice(0, 10) + step}
                        onClickFn={this.handleClickAnswer}
                        // resetFnHandler={this.resetFN}
                        {...item}
                    />
                ))}
            </ul> 
        )
        {/* </> */}
    }
}

export default ListWrapper