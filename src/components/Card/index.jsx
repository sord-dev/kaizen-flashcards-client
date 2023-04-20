import { useTheme } from '../../contexts'
import styles from './styles.module.css'
import { useState } from 'react';

export default function Card({ step, onAnswerSubmit, card, totalCards = 0, match, show = false, continueQuiz }) {
    const { question, answer, description, card_id } = card;

    const { theme } = useTheme();
    const [border, setBorderColor] = useState()

    return (
        <div className={styles["card"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
            <div className={styles["card-header"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <h2>{question}</h2>
                <p>{step + 1}/{totalCards}</p>
            </div>
            {/* <div className={show ? styles["card-body-active"] : styles["card-body"]} >
                // Create an input for the user to type in their answer
                <input className={styles['answer-input']} type="text" placeholder="Type your answer here" />
                // Create a button for the user to submit their answer
                <button>Submit</button> */}
                <p>{answer}</p>
            <div className={styles["card-body"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <form onSubmit={e => onAnswerSubmit(e, { answer, card_id })}>
                    <input type="text" placeholder="Type your answer here" name='userAnawer' autoComplete='off' />

                    <button hidden>Submit</button>
                </form>

               {show ?  <AnswerDetails continueQuiz={continueQuiz} step={step} totalCards={totalCards} match={match} {...card} /> : null}
            </div>
        </div>
    )
}

function AnswerDetails({ answer, description, match, totalCards, step, continueQuiz }) {
    return (
        <div className={styles["answer-card"]}>
            <div className={match ? styles["green"] : styles["red"]}>
                <p>{answer}</p>
                <p>{description}</p>

                {
                    !step + 1 == totalCards
                        ?
                        <button className='btnTheme' onClick={() => continueQuiz(step)}>Next Question</button>
                        :
                        <button className='btnTheme' >Show Results</button>
                }

            </div>
        </div>
    )
}

function GameSummary() {

}