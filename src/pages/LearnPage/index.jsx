import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { } from '../../components';

export default function LearnPage() {
    const { deck_id } = useParams()
    const [deck, setDeck] = useState(null);

    useEffect(() => { // get the deck data
        const getDeck = async () => {
            let deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json();

            setDeck(deck)
        }

        getDeck()
    }, [])

    return (
        <>
            {deck ? <h1>{deck.cards.map(c => <div key={c.card_id}>{c.question}</div>)}</h1> : null}
        </>
    )
}

