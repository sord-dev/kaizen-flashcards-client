import { useTheme } from '../../contexts';
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'

export default function DeckList({ decks = [], removeDeck }) {
    const { theme } = useTheme();
    if (!decks.length) return (<h2 style={{ color: theme.primText }}>Click add deck to create a deck to learn from!</h2>)

    return (
        <div className={styles['deck-list']}>
            {decks.map(d => (<DeckCard key={d.deck_id} removeDeck={removeDeck} deck={d} />))}
        </div>
    )
}

function DeckCard({ deck, removeDeck }) {



    const navigate = useNavigate();

    let { name, deck_id } = deck;

    return (
        <div className='cardTheme'>
            <h2>{name}</h2>
            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <p onClick={() => navigate(`/decks/${deck_id}`)}><i class="fa-solid fa-book"></i></p>
                <p onClick={() => removeDeck(deck_id)}><i class="fa-solid fa-trash"></i></p>
            </div>
        </div>
    )
}