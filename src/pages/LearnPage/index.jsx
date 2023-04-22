import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, LearnSummary } from '../../components';
import { useAuthContext } from '../../contexts/authContext';
import compare from 'js-levenshtein'

export default function LearnPage() {
    const { deck_id } = useParams();
    const { user } = useAuthContext()
    const [deck, setDeck] = useState(null); // deck with questions

    const [show, setShow] = useState(false); // show answer
    const [match, setMatch] = useState(false); // answer question match
    const [done, setDone] = useState(false); // quiz complete
    const [step, setStep] = useState(0); // what question we're on
    const [result, setResult] = useState([]) // quiz result

    let activeCard = deck?.cards[step]; // active card selected based on the step

    const continueQuiz = (step) => {
        if (step + 1 >= deck?.cards.length) {
            setDone(true)
            console.log(done)
        } else {

            setShow(false)
            setStep(prev => prev + 1)
        }
    }

    const submitAnswer = (e, { answer, card_id }) => {
        e.preventDefault()
        const userAnswer = new FormData(e.target).get('userAnswer')

        if (userAnswer) {
            let hit = { card_id, match: compare(userAnswer.toLowerCase(), answer.toLowerCase()) <= 2 ? true : false }
            // compare user input to answer using js-levenshtein, the lower the value, the closer the match

            setShow(true)
            setMatch(hit.match)
            setResult(prev => [...prev, hit])
        }
        e.target.reset()
    }

    const updateStats = async (cardsLen, correct, user_id) => {
        let payload = { amount: cardsLen, correct: correct, user_id }

        const options = { method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }

        try {
            const resp = await fetch("http://localhost:3000/auth/stats", options)
            if (resp.ok) console.log(payload)
        }
        catch (e) {
            console.log(e)
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
            {
                deck && !done ?
                    <Card
                        continueQuiz={continueQuiz}
                        showResult={() => setDone(true)} step={step} card={activeCard} onAnswerSubmit={submitAnswer}
                        match={match}
                        show={show}
                        done={done}
                        totalCards={deck.cards.length} />
                    :
                    <LearnSummary
                        result={result}
                        cards={deck?.cards}
                        updateStats={updateStats}
                        user_id={user.user_id} />
            }

        </>
    )
}