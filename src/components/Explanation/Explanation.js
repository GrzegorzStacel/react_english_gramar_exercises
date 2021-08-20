import React, { useState, useRef, useEffect } from 'react'
import styles from './Explanation.module.scss';
import atRule  from './Rules/atRule';
import inRule  from './Rules/inRule';
import onRule  from './Rules/onRule';

const Explanation = () => {
    const [activeClasses, setActive] = useState([false, false, false]);
    const [adverbsListName] = useState(['at', 'in', 'on']);
    const [adverbData] = useState([atRule, inRule, onRule]);

    const toggleClass = (index) => {
        const newActiveClasses = activeClasses.map((item, step) => {
            if (item) return false
            if (index === step) return true
            return false
        })

        setActive(newActiveClasses)
    };

    const BuildRule = (name, index, rule) => {
        const borderRadiusClass = ['first', 'inside', 'last']
        const classesIfTrue = styles.trigger + ' ' + styles.big + ' ' + styles[borderRadiusClass[0]]
        const classesIfFalse = styles.trigger + ' ' + styles[borderRadiusClass[index]]

        const wrapperRef = useRef(null);
        ClickOutsideAndClose(wrapperRef);

        // console.log('wrapperref', wrapperRef.current.parentElement.offsetHeight);
        return <>
            <div
                className={styles.triggerWrapper}
                ref={wrapperRef}
                >
                <div
                    className={activeClasses[index] ? classesIfTrue : classesIfFalse}
                    // ref={wrapperRef}
                    onClick={() => toggleClass(index)}
                    key={activeClasses[index] + index}
                    >
                    <p className={styles.info}>{name}</p>
                </div>
                <div className={activeClasses[index] ? styles.rules + ' ' + styles.show : styles.rules}>
                    {rule}
                </div>
            </div>
        </>
    }

    const ClickOutsideAndClose = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) ) {
                    console.log('refcurrent1', ref.current.parentElement, ref.current.parentElement.offsetHeight);
                    // console.log('click', event.target);
                    // if (activeClasses.includes(true)) {
                        // console.log('yes');
                        setActive([false, false, false])
                        // }
                    }
                }
                
            console.log('refcurrent2', ref, 'ref.current', ref.current.parentElement, ref.current.parentElement.offsetHeight);
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <>
            <div className={styles.wrapper}>
                {adverbsListName.map((item, index) => {
                    return BuildRule(item, index, adverbData[index])
                })}
            </div>
        </>
    )
}

export default Explanation
