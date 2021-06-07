import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'

class ListWrapper extends React.Component {
    state = {
        buttonEvents: null
    }

    render() {
        return (
            <>
                <ul className={styles.listWrapper}>
                    
                    {this.props.items.map((item, step) => (
                        <ListItem
                            key={item.question.slice(0, 10) + step}
                            resetFnHandler={this.resetFN}
                            {...item} />
                    ))}
                </ul> 
            </>
        )
    }
}

export default ListWrapper