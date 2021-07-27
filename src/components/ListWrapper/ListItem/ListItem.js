import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';

const ListItem = ({ manageRemovalDisabledAttributeFromButtonsHandler, ...item }) => {

    const adverbNameArr = ['in', 'on', 'at']

    const handleClickAnswer = (e, correctAnswer) => {
        const nextId = e.target.parentElement.parentElement.id
        console.log('click');
        if (e.target.innerText.toLowerCase() === correctAnswer) {
            manageRemovalDisabledAttributeFromButtonsHandler(item.questionNumberOnTheArray)
            item.changeClassOfTheNextElementAfterTheCorrectAnswerHandler(nextId);

            return e.target.className = styles.correct
        }

        e.target.className = styles.wrong
    }

    return (
        <li
            className={[item.questionNumberOnTheArray === 0 ? styles.active : ''] + ' ' + styles.wrapper}
            id={`${item.questionNumberOnTheArray}-listItem`}
        >
            <p className={styles.quesion}>{item.question}</p>
            <div className={styles.answersWrapper}>
                {adverbNameArr.map(adverbNameArrItems => (
                    <Button
                        handleOnClick={(e) => {
                            handleClickAnswer(e, item.answer);
                        } }
                        setClassName={styles.answer}
                        {...item}
                    >
                        {adverbNameArrItems}
                    </Button>
                    ))
                }
            </div>
            </li>
            )
        }
        
        export default ListItem
        