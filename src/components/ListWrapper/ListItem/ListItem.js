import React, { useEffect } from 'react';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';

const ListItem = ({ manageRemovalDisabledAttributeFromButtonsHandler, stateActive, stateHandler, ...item }) => {

    const adverbNameArr = ['in', 'on', 'at']

    const handleClickAnswer = (e, correctAnswer) => {
        const nextId = e.target.parentElement.parentElement.id
        if (e.target.innerText.toLowerCase() === correctAnswer) {
            const actualId = e.target.parentElement.children
            for (item of actualId){
                item.className = styles.gray
            }
            changeClassOfTheNextElementAfterTheCorrectAnswer(nextId)

            return e.target.className = styles.correct
        }

        e.target.className = styles.wrong
    }

    const changeClassOfTheNextElementAfterTheCorrectAnswer = (nextId) => {
        const newId = nextId.replace(/(\d+)+/g, (match, number) => {
            if ((parseInt(number) + 1) >= stateHandler.active.length) {
                return parseInt(number)
            }

            return parseInt(number) + 1
        })

        const offDisabledNextElement = document.getElementById(newId)
        offDisabledNextElement.className = styles.active + ' ' + styles.wrapper
    }

    const SetDefaultClassesAfterReset = () => {
        useEffect(() => {
            if (stateHandler.isResetNow) {

                // Bezpośrednie zmiany klas elementów (li oraz button) za pomocą odnoszenia się do nich poprzez ich konkretne klasy lub id było nieskuteczne ponieważ 
                // zupełnie losowo niektóre z tych elementów nie były znajdywane w drzewie DOM i co za tym idzie ich klasy nie były nadpisywane.

                const listWrapperLi = document.getElementById('listWrapper')

                for (let i = 0; i < listWrapperLi.children.length; i++){
                    listWrapperLi.children[i].className = i === 0 ? styles.active + ' ' + styles.wrapper : styles.wrapper
                    for (let j = 0; j < 3; j++){
                        listWrapperLi.children[i].children[1].children[j].className = styles.answer
                    }
                }
                
                item.changeStateIsResetNow()
            }
        }, [])
    }

    return (
        <>
            { SetDefaultClassesAfterReset() }
            <li
                    className={styles.wrapper + ' ' + [item.questionNumberOnTheArray === 0 ? styles.active : null]}
                    id={`${item.questionNumberOnTheArray}-listItem`}
                >
                    <p className={styles.quesion}>{item.question}</p>
                    <div className={styles.answersWrapper}>
                        {adverbNameArr.map((adverbNameArrItems, step) => (
                            <Button
                                handleOnClick={(e) => {
                                    handleClickAnswer(e, item.answer);
                                }}
                                setClassName={styles.answer}
                                key={item.question.slice(0, 11) + step}
                                {...item}
                            >
                                {adverbNameArrItems}
                            </Button>
                        ))
                        }
                    </div>
                </li>
            </>
    )
}

export default ListItem
        