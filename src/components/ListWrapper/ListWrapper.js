import * as React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss'
import Button from '../Button/Button';


class ListWrapper extends React.Component {
    state = {
        active: [true].concat(new Array(this.props.items.length - 1).fill(false)),
        verifyCounter: 0,
        isResetNow: false,
    }

    manageRemovalDisabledAttributeFromButtons = (questionNumberOnTheArray) => {
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
        })
    }

    isReset = () => {
        this.setState(prevState => ({
                active: [true].concat(new Array(this.props.items.length - 1).fill(false)),
                verifyCounter: 0,
                isResetNow: !prevState.isResetNow
        }), () => {
            this.props.setStateAndUpdate()
        })
    }
    
    changeStateIsResetNow = () => {
        this.setState(prevState => ({
            isResetNow: !prevState.isResetNow
        }))
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
                        stateHandler={this.state}    
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