import styles from './Rule.module.scss';

const onRule =
    <>
        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Dni tygodnia</p>
            </div>
            <div className={styles.singleExamples}>
                <p>on Monday</p>
                <p>on Friday</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Daty</p>
            </div>
            <div className={styles.singleExamples}>
                <p>on the 23rd of December</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>specjalne uroczystości/święta</p>
            </div>
            <div className={styles.singleExamples}>
                <p>on Christmas Day</p>
                <p>on Good Friday</p>
                <p>on Easter Sunday</p>
                <p>on my birthday</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Części dnia</p>
            </div>
            <div className={styles.singleExamples}>
                <p>on the evening of the 23rd*</p>
                <p>on Sunday morning(s)</p>
                <p>on Monday afternoon(s)</p>
                <p>on Tuesday evening(s)</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Wyrażenie: on time</p>
            </div>
            <div className={styles.singleExamples}>
                <p>The train left on time.</p>
                <p>'Don't be late. Please, be on time.</p>
            </div>
        </div>
    </>

export default onRule;