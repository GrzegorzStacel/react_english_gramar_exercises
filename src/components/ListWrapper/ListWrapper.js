import * as React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import listItemStyles from './ListItem/ListItem.module.scss';

class ListWrapper extends React.Component {
    state = {
        active: new Array(this.props.items.length).fill(false),
        verifyCounter: 0,
    }

    manageRemovalDisabledAttributeFromButtons = (questionNumberOnTheArray) => {
        this.setState = ({
            active: this.state.active[questionNumberOnTheArray + 1] = true, // remove disabled attribute from next buttons
            active: this.state.active[questionNumberOnTheArray] = false, // add disabled attribute to previous buttons
            verifyCounter: this.state.verifyCounter++
        })
    }

    changeFirstElementOfArrayInState = () => {
        if (this.state.verifyCounter === 0) {
            this.setState = ({
                active: this.state.active[0] = true // remove disabled attribute from first question buttons
            })
        }
    }

    changeClassOfTheNextElementAfterTheCorrectAnswer = (nextId) => {

        const newId = nextId.replace(/(\d+)+/g, (match, number) => {
            if ((parseInt(number) + 1) >= this.state.active.length) {
                return parseInt(number) // a alfa version to resolve te problem with error  
            }

            return parseInt(number) + 1 //an error when I answer a the last question
        })

        const offDisabledNextElement = document.getElementById(newId)
        offDisabledNextElement.className = listItemStyles.active + ' ' + listItemStyles.wrapper

        this.forceUpdate() 
    }

    isReset = () => {
        if (this.props.isReset) {
            this.setState = ({
                active: this.state.active.fill(false),
                verifyCounter: 0 
            })
        }
    }
    
    render() {
        if (this.props.isReset) {
            this.isReset()
            this.props.randomFN()
        }
        this.changeFirstElementOfArrayInState()

        return (
            <ul className={styles.listWrapper}>
                    {this.props.items.map((item, step) => (
                    <ListItem
                        manageRemovalDisabledAttributeFromButtonsHandler={this.manageRemovalDisabledAttributeFromButtons}
                        changeClassOfTheNextElementAfterTheCorrectAnswerHandler={this.changeClassOfTheNextElementAfterTheCorrectAnswer}
                        manageDisabledButtons={this.state.active[step] === false ? true : false}
                        key={item.question.slice(0, 10) + step}
                        questionNumberOnTheArray={step}
                        {...item}
                    />
                ))}
            </ul> 
        )
    }
}

export default ListWrapper