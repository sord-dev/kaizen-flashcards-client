import { Link } from 'react-router-dom';

import styles from './styles.module.css'

export default function SummaryCard({ cards, deck_id }) {
    return (
        <div className={styles["summary-card"]}>

            <p>Cards in deck: {cards.length}</p>

            <div className={styles["action-group"]}>
                <div className='review-block'>
                    <p>To review</p>
                    <h3 className='review-color'>120</h3>
                </div>

                <div className='learn-block'>
                    <p>New Cards</p>
                    <h3 className='learn-color'>120</h3>
                </div>
            </div>


            <div className={styles["action-group"]}>
                <Link to={`learn`}><button>Start Learning</button></Link>
                <button>Edit Deck</button>
            </div>
        

        </div>
    )
}