import { useEffect } from "react";
import { useTheme } from "../../contexts";
import { Link } from "react-router-dom";
import styles from './style.module.css'


export default function LearnSummary({ result = [], cards = [], updateStats, user_id }) {
    const { theme } = useTheme();
    const correct = result.filter(a => a.match == true).length;
    const wrong = result.filter(a => a.match == false).length;

    const percent = 100 / cards.length;
    const accuracy = percent * correct;

    useEffect(() => {
        updateStats(cards.length, correct, user_id);
    }, [])

    return (
        <>
            <div style={{ color: theme.primText }} className={styles["learn-summary"]}>
                {result.map(answer => {
                    let card = cards.find(c => c.card_id === answer.card_id);

                    return <SummaryQuestion key={answer.card_id} match={answer.match} card={card} />
                })}

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2em' }} className={styles["learn-summary-stats"]}>
                    <div>
                        <h3>Correct</h3>
                        <p>{correct}</p>
                    </div>

                    <div>
                        <h3>Incorrect</h3>
                        <p>{wrong}</p>
                    </div>

                    <div>
                        <h3>Accuracy</h3>
                        <p>{accuracy}%</p>
                    </div>
                </div>
            </div>

            <Link to={'/decks'}><button className='btnTheme'>Back to Decks</button></Link>
        </>
    )
}

function SummaryQuestion({ match, card }) {
    return (
        <div className={match ? `${styles["learn-summary-question"]} ${styles["right"]}` : `${styles["learn-summary-question"]} ${styles["wrong"]}`} >
            <h4>Q: {card.question}</h4>
            <div className={styles["learn-summary-question-metadata"]}>
                <p>{card.description}</p>
                <p>A: {card.answer}</p>
            </div>

        </div>
    )
}