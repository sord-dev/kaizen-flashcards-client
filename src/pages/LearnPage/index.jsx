import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Card } from '../../components';

import compare from 'js-levenshtein'
import { useTheme } from '../../contexts';

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
        if (step + 1 >= deck?.cards.length) {
            setDone(true)
            console.log(done)
        } else {

            setShow(false)
            setStep(prev => prev + 1)
        }
    }

    const showResult = () => {
        console.log(result);
        setDone(true)
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
        e.target.reset()
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
            {deck && !done ? <Card continueQuiz={continueQuiz} showResult={showResult} step={step} card={activeCard} onAnswerSubmit={onAnswerSubmit} match={match} show={show} done={done} totalCards={deck.cards.length} /> : <LearnSummary result={result} cards={deck?.cards} />}
        </>
    )
}

function LearnSummary({ result = [], cards = [] }) {
    const { theme } = useTheme();

    const correct = result.filter(a => a.match == true).length;
    const wrong = result.filter(a => a.match == false).length;

    const percent = 100 / cards.length;
    const accuracy = percent * correct;

    return (
        <>
            <div style={{ color: theme.primText }}>
                {result.map(answer => {
                    let card = cards.find(c => c.card_id === answer.card_id);

                    return <SummaryQuestion key={answer.card_id} match={answer.match} card={card} />
                })}

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2em' }}>
                    <div>
                        <h3>Correct</h3>
                        <p>{correct}</p>
                    </div>

                    <div>
                        <h3>Incorrect</h3>
                        <p>{wrong}</p>
                    </div>

                    <div>
                        <h3>Accuracy</h3>
                        <p>{accuracy}%</p>
                    </div>
                </div>
            </div>

            <Link to={'/decks'}><button className='btnTheme'>Back to Decks</button></Link>
        </>
    )
}

function SummaryQuestion({ match, card }) {
    return (
        <p> {card.question} | {card.answer} | {match ? 'correct' : 'incorrect'}</p>
    )
}