import { Link } from 'react-router-dom';

import styles from './styles.module.css'

export default function SummaryCard({ cards, deck_id }) {
    return (
        <div className={styles["summary-card"]}>
            <p>Cards in deck: {cards.length}</p>

            <div className={styles["action-group"]}>
                <Link to={`/${deck_id}/learn`}><button>Start Learning</button></Link>
                <button>Edit Deck</button>
            </div>


        </div>
    )
}