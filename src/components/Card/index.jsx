import { useTheme } from '../../contexts'
import styles from './styles.module.css'

export default function Card({ card_id, question, description, answer, show, onCardSubmit }) {
    const { theme } = useTheme();
    return (
        <div className={styles["card"]} >
            <div className={styles["card-header"]} style={{color: theme.primText, backgroundColor: theme.primBG}}>
                <h2>{question}</h2>
            </div>
            <div className={show ? styles["card-body-active"] : styles["card-body"]} >
                // Create an input for the user to type in their answer
                <input type="text" placeholder="Type your answer here" />
                // Create a button for the user to submit their answer
                <button>Submit</button>
                <p>{answer}</p>

                <p>{description}</p>

                <div className={styles["card-actions"]}>
                    <button onClick={() => onCardSubmit(null, {type: 'good', card_id})}>correct</button>
                    <button  onClick={() => onCardSubmit(null, {type: 'bad', card_id})}>wrong</button>
                </div>
            </div>
        </div>
    )
}