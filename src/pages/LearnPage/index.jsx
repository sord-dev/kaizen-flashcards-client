import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTheme } from '../../contexts';

import { Card } from '../../components';

export default function LearnPage() {
    const { deck_id } = useParams()
    const [deck, setDeck] = useState(null);
    const { theme } = useTheme()

    const [step, setStep] = useState(0); // what question we're on
    const [show, setShow] = useState(false); // determine weather we show the component or not
    const [results, setResults] = useState({ deck_id: parseInt(deck_id), hits: [] }); // the end result of the user quiz

    const handleCardInteraction = (e, command) => {
        if (e) { // handling keyboard interaction 
            switch (e.key) {
                case " ":
                    setShow(prev => !prev);
                    break;

                default:
                    break;
            }
        }

        if (command) { // handling submit interaction
            switch (command.type) {
                case "good":
                    setStep(prev => { // move to the next card + check if it's the end of the cardList
                        if (prev >= deck.cards.length - 1) return deck.cards.length - 1;
                        return prev + 1;
                    });

                    // update the results based on user input
                    setResults(prev => ({ ...prev, hits: [...prev.hits, { card_id: command.card_id, answer: command.type }] }));
                    setShow(false); // hide next card's answer
                    break;

                case "bad":
                    setStep(prev => {  // move to the next card + check if it's the end of the cards
                        if (prev >= deck.cards.length - 1) return deck.cards.length - 1;
                        return prev + 1;
                    });

                    // update the results based on user input
                    setResults(prev => ({ ...prev, hits: [...prev.hits, { card_id: command.card_id, answer: command.type }] }));
                    setShow(false);// hide next card's answer
                    break;

                default:
                    break;
            }
        }
    }

    useEffect(() => { // get the deck data
        const getDeck = async () => {
            let deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json();

            setDeck(deck)
        }

        getDeck()

        window.addEventListener("keydown", handleCardInteraction);
        // event cleanup in use effect
        return () => window.removeEventListener("keydown", handleCardInteraction)
    }, [])

    useEffect(() => { // check for end of game and log results 
        if(results.hits.length == deck?.cards.length) {
            console.log('done', results);
            setStep(0);
        }
    }, [results])
   

    return (
        <>
            {deck ? <Card {...deck.cards[step]} show={show} onCardSubmit={handleCardInteraction} /> : null}
        </>
    )
}

