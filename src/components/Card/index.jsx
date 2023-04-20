import { useTheme } from '../../contexts'
import styles from './styles.module.css'

export default function Card({ step, onAnswerSubmit, cards, match, show = false }) {
    let { card_id, question, description, answer } = cards[step]; // from all the cards, get the card in which the active step is at and destructure it

    const { theme } = useTheme();

    return (
        <div className={styles["card"]} >
            <div className={styles["card-header"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <h2>{question}</h2>
                <p>{step + 1}/{cards.length}</p>
            </div>
            {/* <div className={show ? styles["card-body-active"] : styles["card-body"]} >
                // Create an input for the user to type in their answer
                <input className={styles['answer-input']} type="text" placeholder="Type your answer here" />
                // Create a button for the user to submit their answer
                <button>Submit</button> */}
                <p>{answer}</p>
            <div className={styles["card-body"]} style={{ color: theme.primText, backgroundColor: theme.primBG }}>
                <form onSubmit={e => onAnswerSubmit(e, { answer, card_id })}>
                    <input type="text" placeholder="Type your answer here" name='userAnawer' autoComplete='false' autoCorrect='true'/>

                    <button hidden>Submit</button>
                </form>

                <div className={show ? styles["answer-card"] : styles["answer-card-innactive"]}>
                    <div className={match ? styles["green"] : styles["red"]}>
                        <p>{answer}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}