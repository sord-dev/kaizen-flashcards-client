import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components';

import compare from 'js-levenshtein'

export default function LearnPage() {
    const { deck_id } = useParams();
    const [deck, setDeck] = useState(null);

    const [show, setShow] = useState(false);
    const [match, setMatch] = useState(false);
    const [done, setDone] = useState(false); // quiz complete?

    const [step, setStep] = useState(0); // what question we're on


    let activeCard = deck?.cards[step];

    const [result, setResult] = useState([])

    const continueQuiz = (step) => {
        if(step + 1 >= deck?.cards.length) {
            setDone(true)
            console.log(done)
        } else {
            
            setShow(false)
            setStep(prev => prev + 1)
        }
    }

    const showResult = () => {
        console.log(result);
    }

    const onAnswerSubmit = (e, { answer, card_id }) => {
        e.preventDefault()
        const userAnswer = new FormData(e.target).get('userAnawer')
        if (userAnswer) {
            let hit = { card_id, match: compare(userAnswer.toLowerCase(), answer.toLowerCase()) <= 2 ? true : false } // for server
            
            setShow(true)
            setMatch(hit.match)
            setResult(prev => [...prev, hit])            
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
            {deck ? <Card continueQuiz={continueQuiz} showResult={showResult} step={step} card={activeCard} onAnswerSubmit={onAnswerSubmit} match={match} show={show} done={done} totalCards={deck.cards.length}/> : null}
        </>
    )
}

