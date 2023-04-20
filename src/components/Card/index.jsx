import { useTheme } from '../../contexts'
import styles from './styles.module.css'

export default function Card({ step, onAnswerSubmit, card, totalCards = 0, match, show = false, continueQuiz, showResult }) {
    const { question, answer, card_id } = card;

    const { theme } = useTheme();

    return (
        <div className={styles["card"]} >
            <div className={styles["card-header"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <h2>{question}</h2>
                <p>{step + 1}/{totalCards}</p>
            </div>
            <div className={styles["card-body"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <form onSubmit={e => onAnswerSubmit(e, { answer, card_id })}>
                    <input type="text" placeholder="Type your answer here" name='userAnawer' autoComplete='off' />

                    <button hidden>Submit</button>
                </form>

                {show ? <AnswerDetails showResult={showResult} continueQuiz={continueQuiz} step={step} totalCards={totalCards} match={match} {...card} /> : null}
            </div>
        </div>
    )
}

function AnswerDetails({ answer, description, match, totalCards, step, continueQuiz, showResult }) {
    return (
        <div className={styles["answer-card"]}>
            <div className={match ? styles["green"] : styles["red"]}>
                <p>{answer}</p>
                <p>{description}</p>

                {
                    step + 1 !== totalCards
                        ?
                        <button className='btnTheme' onClick={() => continueQuiz(step)}>Next Question</button>
                        :
                        <button className='btnTheme' onClick={() => showResult()}>Show Results</button>
                }

            </div>
        </div>
    )
}