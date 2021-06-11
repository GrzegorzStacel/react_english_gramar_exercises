import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';

class ListItem extends React.Component {
    state = {

    }

    handleClickAnswer = (e) => {
        if (e.target.innerText.toLowerCase() === this.props.answer) {
            return e.target.className = styles.correct
        }

        e.target.className = styles.wrong
    }

    render() {
        return (
            <li className={styles.wrapper}>
                <p className={styles.quesion}>{this.props.question}</p>
                <div className={styles.answersWrapper}>
                    <Button
                        handleOnClick={this.handleClickAnswer}
                        setClassName={styles.answer}
                        id='in'
                    >
                        In
                    </Button>
                    <Button
                        handleOnClick={this.handleClickAnswer}
                        setClassName={styles.answer}
                        id='on'
                    >
                        On
                    </Button>
                    <Button
                        handleOnClick={this.handleClickAnswer}
                        setClassName={styles.answer}
                        id='at'
                    >
                        At
                    </Button>
                </div>
            </li>
        )
    }
}

export default ListItem
