import styles from './Rule.module.scss';

const atRule =
    <>
        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Godziny</p>
            </div>
            <div className={styles.singleExamples}>
                <p>at 9 o'clock</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Pory dnia</p>
            </div>
            <div className={styles.singleExamples}>
                <p>at noon</p>
                <p>at night</p>
                <p>at midnight</p>
                <p>at lunchtime</p>
                <p>at sunset</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Święta</p>
            </div>
            <div className={styles.singleExamples}>
                <p>at Christmas</p>
                <p>at Easter</p>
            </div>
        </div>

        <div className={styles.singleRule}>
            <div className={styles.singleExplain}>
                <p>Ustalone wyrażenia</p>
            </div>
            <div className={styles.singleExamples}>
                <p>at the same time</p>
                <p>at the weekend</p>
                <p>at weekends</p>
                <p>at the moment</p>
                <p>at present</p>
                <p>at the end of the month</p>
                <p>at the end of January</p>
            </div>
        </div>
    </>

export default atRule;