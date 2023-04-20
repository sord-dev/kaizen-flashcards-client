import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { Flashcard, Modal } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeckPage() {
    const navigate = useNavigate()
    const [deck, setDeck] = useState({ cards: [] })
    const { deck_id } = useParams()
    const [openModal, setOpenModal] = useState(false)
    const [newCardDetails, setNewCardDetails] = useState({ question: "", description: "", answer: "" })
    const { theme } = useTheme()

    const handleCreateCard = async () => {
        const { question, description, answer } = newCardDetails;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question,
                description: description,
                answer: answer
            })
        }
        try {
            const resp = await fetch(`http://localhost:3000/card/${deck_id}`, options)
            if (resp.ok) {
                const data = await resp.json();
                console.log(data);
                setDeck(prev => ({ ...prev, cards: [...prev.cards, { ...data, question, description, answer }] }))
                setOpenModal(false)
                newCardDetails({ question: "", description: "", answer: "" })
            }
        }
        catch {
            throw new Error("Unable to get, status code: ", resp.status)
        }
    }

    useEffect(() => {
        const getDeck = async () => {
            const deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json()

            console.log(deck);
            setDeck(deck);
        }

        getDeck()
    }, [])

    const removeCard = async card_id => {
        const options = {
            method: "DELETE"
        }
        try {
            const resp = await fetch(`http://localhost:3000/card/${card_id}`, options)
            if (resp.ok) {
                let newCards = deck.cards.filter(card => card.card_id !== card_id)
                setDeck(prev => ({ ...prev, cards: newCards }))
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ color: theme.primText }}>
            <h1>{deck.name}</h1>
            <p>{deck.cards.length} cards</p>
            <p>Start learning or add a card to expand your deck</p>

            <div className='btnContainer'>
                <button className='btnTheme' onClick={() => setOpenModal(true)}>+ Add Card</button>
                {deck?.cards.length ? <button className='btnTheme' onClick={() => navigate('learn')}>Start Learning</button> : null}
            </div>

            {
                deck ?
                    <div className='card-list'>
                        {deck?.cards.map((card) => <Flashcard key={card.card_id} user_id={card.card_id} {...card} removeCard={removeCard} />)}
                    </div>
                    :
                    <h3>Add some cards to study from above!</h3>
            }


            <Modal open={openModal}>
                <h2>Add new Card</h2>
                <div>
                    <label>Question</label>
                    <input value={newCardDetails.question} onChange={(e) => setNewCardDetails(prev => ({ ...prev, question: e.target.value }))} />
                </div>
                <div>
                    <label>Description</label>
                    <input value={newCardDetails.description} onChange={(e) => setNewCardDetails(prev => ({ ...prev, description: e.target.value }))} />
                </div>
                <div>
                    <label>Answer</label>
                    <input value={newCardDetails.answer} onChange={(e) => setNewCardDetails(prev => ({ ...prev, answer: e.target.value }))} />
                </div>
                <div className='btnContainer'>
                    <button className='btnTheme' type='submit' id='btnAddDeck' onClick={() => handleCreateCard(newCardDetails.question, newCardDetails.description, newCardDetails.answer)}>Create Card</button>
                    <button className='btnTheme' type='button' id='btnAddDeck' onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            </Modal>

        </div>
    )
}
