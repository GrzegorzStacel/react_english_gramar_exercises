import React, { useState } from 'react'
import styles from './Explanation.module.scss';
import  atRule  from './Rules/atRule';
import  inRule  from './Rules/inRule';
import  onRule  from './Rules/onRule';

const Explanation = () => {
    const [activeClasses, setActive] = useState([false, false, false]);
    const [adverbsListName] = useState(['at', 'in', 'on']);
    const [adverbData] = useState([atRule, inRule, onRule]);

    const toggleClass = (index) => {
        const newActiveClasses = activeClasses.map((item, step) => {
            if (item) {
                return false
            }

            if (index === step) {
                return true
            }
        
            return false
        })

        setActive(newActiveClasses)
    };

    const buildRule = (name, index, rule) => {
        const borderRadiusClass = ['first', 'inside', 'last']
        const classesIfTrue = styles.trigger + ' ' + styles.big + ' ' + styles[borderRadiusClass[0]]
        const classesIfFalse = styles.trigger + ' ' + styles[borderRadiusClass[index]]
        
        return <>
            <div
                className={activeClasses[index] ? classesIfTrue : classesIfFalse}
                onClick={() => toggleClass(index)}
            >
                <p className={styles.info}>{name}</p>
                <div className={styles.rules}>
                    {rule}
                </div>
            </div>
        </>
    }

    return (
        <>
            <div className={styles.wrapper}>
                {adverbsListName.map((item, index) => {
                    return buildRule(item, index, adverbData[index])
                })}
            </div>
        </>
    )
}

export default Explanation
