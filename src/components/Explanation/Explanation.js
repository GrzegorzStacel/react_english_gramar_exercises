import React, { useState, useRef, useEffect } from 'react'
import styles from './Explanation.module.scss';
import atRule  from './Rules/atRule';
import inRule  from './Rules/inRule';
import onRule from './Rules/onRule';

const Explanation = () => {
    const [activeClasses, setActive] = useState([false, false, false]);
    const [adverbsListName] = useState(['at', 'in', 'on']);
    const [adverbData] = useState([atRule, inRule, onRule]);
    const componentRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);

        function handleClick(e) {
            if(componentRef && componentRef.current){
                const ref = componentRef.current

                if (!ref.contains(e.target.parentElement[0])) {
                    if (e.target.id === 'at') return toggleClass(e, 0) 
                    if (e.target.id === 'in') return toggleClass(e, 1) 
                    if (e.target.id === 'on') return toggleClass(e, 2) 
                    else return toggleClass(e, 999)
                }
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const toggleClass = (e, index) => {
        if (adverbsListName.find(element => element === e.target.id) && index < 3) {
            
            const newActiveClasses = activeClasses.map((item, step) => {
                if (index === step) return true
                if (item || !item) return false
                return null
            })
            
            return setActive(newActiveClasses)
        }

        if (index === 999) return setActive([false, false, false])
    };


    const BuildRule = (name, index, rule) => {
        const borderRadiusClass = ['first', 'inside', 'last']
        const classesIfTrue = styles.trigger + ' ' + styles.big + ' ' + styles[borderRadiusClass[0]]
        const classesIfFalse = styles.trigger + ' ' + styles[borderRadiusClass[index]]

        return <>
            <div
                className={styles.triggerWrapper}
            >
                <div
                    className={activeClasses[index] ? classesIfTrue : classesIfFalse}
                    key={activeClasses[index] + index}
                    id={adverbsListName[index]}
                    >
                    {name}
                </div>
                <div className={activeClasses[index] ? styles.rules + ' ' + styles.show : styles.rules}>
                    {rule}
                </div>
            </div>
        </>
    }

    return (
        <>
            <div className={styles.wrapper}
                ref={componentRef}
            >
                {adverbsListName.map((item, index) => {
                    return BuildRule(item, index, adverbData[index])
                })}
            </div>
        </>
    )
}

export default Explanation
