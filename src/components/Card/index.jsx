import styles from './styles.module.css'

export default function Card({ card_id, question, description, answer, show, onCardSubmit }) {
    return (
        <div className={styles["card"]} >
            <div className={styles["card-header"]}>
                <h2>{question}</h2>
            </div>

            <div className={show ? styles["card-body-active"] : styles["card-body"]} >
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