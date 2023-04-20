import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components';

import compare from 'js-levenshtein'

export default function LearnPage() {
    const { deck_id } = useParams();
    const [deck, setDeck] = useState(null);

    const [show, setShow] = useState(false);
    const [match, setMatch] = useState(false);

    const [step, setStep] = useState(0); // what question we're on

    const onAnswerSubmit = (e, { answer, card_id }) => {
        e.preventDefault()
        setShow(true)
        const userAnswer = new FormData(e.target).get('userAnawer')
        if (userAnswer) {
            let hit = { card_id, match: compare(userAnswer.toLowerCase(), answer.toLowerCase()) }
            hit.match <= 2 ? setMatch(true) : setMatch(false);
            console.log(hit);
        }
        
    }

    useEffect(() => { // get the deck data
        const getDeck = async () => {
            let deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json();

            setDeck(deck)
        }

        getDeck()
    }, [])

    return (
        <>
            {deck ? <Card step={step} cards={deck.cards} onAnswerSubmit={onAnswerSubmit} match={match} show={show} /> : null}
        </>
    )
}

