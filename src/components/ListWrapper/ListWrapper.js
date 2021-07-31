import * as React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import listItemStyles from './ListItem/ListItem.module.scss';
import Button from '../Button/Button';


class ListWrapper extends React.Component {
    state = {
        active: [true].concat(new Array(this.props.items.length - 1).fill(false)),
        verifyCounter: 0,
        isResetNow: false,
    }

    manageRemovalDisabledAttributeFromButtons = (questionNumberOnTheArray, nextId) => {
        this.setState(prevState => {
            const active = prevState.active.map((item, index) => {
                if (index === questionNumberOnTheArray) {
                    return false
                } if (index === questionNumberOnTheArray + 1) {
                    return true
                } else {
                    return item
                }
            })
            
            return {
                active,
                verifyCounter: prevState.verifyCounter + 1
            }

        },
            () => this.changeClassOfTheNextElementAfterTheCorrectAnswer(nextId)
        )
    }

    changeClassOfTheNextElementAfterTheCorrectAnswer = (nextId) => {
        const newId = nextId.replace(/(\d+)+/g, (match, number) => {
            if ((parseInt(number) + 1) >= this.state.active.length) {
                return parseInt(number)
            }

            return parseInt(number) + 1
        })

        const offDisabledNextElement = document.getElementById(newId)
        offDisabledNextElement.className = listItemStyles.active + ' ' + listItemStyles.wrapper
    }

    isReset = () => {
        this.setState({
            active: [true].concat(new Array(this.props.items.length - 1).fill(false)),
            verifyCounter: 0,
            isResetNow: true
        }, () => {
            this.props.setStateAndUpdate()
        })
    }
    
    changeStateIsResetNow = () => {
        this.setState({
            isResetNow: false
        })
    }
    
    render() {
        return (
            <>
            <ul className={styles.listWrapper} id={'listWrapper'}>
                    {this.props.items.map((item, step) => (
                    <ListItem
                        manageRemovalDisabledAttributeFromButtonsHandler={this.manageRemovalDisabledAttributeFromButtons}
                        manageDisabledButtons={this.state.active[step] === false ? true : false}
                        key={item.question.slice(0, 10) + step}
                        questionNumberOnTheArray={step}
                        isResetNow={this.state.isResetNow}
                        changeStateIsResetNow={this.changeStateIsResetNow}
                        {...item}
                    />
                ))}
            </ul>
            <Button
                    handleOnClick={this.isReset}
                    setClassName={styles.resetBtn}
            >
                RESET
            </Button>
            </>
        )
    }
}

export default ListWrapper