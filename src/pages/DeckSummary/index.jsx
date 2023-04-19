import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { SummaryCard } from '../../components';

export default function DeckSummary() {
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
            {deck ? <h1>{deck.name}</h1> : <h1>Loading...</h1>}
            {deck ? <SummaryCard {...deck} /> : null}
        </>
    )
}

