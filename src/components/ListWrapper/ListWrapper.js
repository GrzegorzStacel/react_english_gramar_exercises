import React from 'react';
import Button from '../Button/Button';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import stylesListItem from './ListItem/ListItem.module.scss'



class ListWrapper extends React.Component {
    state = {
        buttonEvents: null
    }

    resetFN = (e) => {
        const collectionOfAnswerButtons = e.target.parentElement.children

        for (let i = 1; i < collectionOfAnswerButtons.length; i++){
            for (let j = 0; j < collectionOfAnswerButtons[i].children[1].children.length; j++)
            collectionOfAnswerButtons[i].children[1].children[j].className = stylesListItem.answer
        }
    }
    
    render() {
        return (
            <>
                <ul className={styles.listWrapper}>
                    <Button
                        className={styles.resetBtn}    
                        handleOnClick={(e) => this.resetFN(e)}
                    >
                        RESET
                    </Button>
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