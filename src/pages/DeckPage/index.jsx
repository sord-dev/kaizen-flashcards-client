import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { Flashcard, Modal } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeckPage() {
    const navigate = useNavigate()
    const [deck, setDeck] = useState({ cards: [] })
    const { deck_id } = useParams()
    const [openModal, setOpenModal] = useState(false)
    const [newCardDetails, setNewCardDetails] = useState({ username: "", description: "", answer: "" })
    const { theme } = useTheme()

    function handleCreateCard() {
        console.log(newCardDetails) // REPLACE ME JACK C:
    }

    useEffect(() => {
        const getDeck = async () => {
            const deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json()

            console.log(deck);
            setDeck(deck);
        }

        getDeck()
    }, [])



    return (
        <div style={{ color: theme.primText }}>
            <h1>{deck.name}</h1>
            <p>{deck.cards.length} cards</p>
            <p>Start learning or add a card to expand your deck</p>

            <div className='buttons-div'>
                <button className='btnTheme' onClick={() => setOpenModal(true)}>+ Add Card</button>
                {deck?.cards.length ? <button className='btnTheme' onClick={() => navigate('learn')}>Start Learning</button> : null}
            </div>

            {
                deck ?
                    <div className='card-list'>
                        {deck?.cards.map((card) => <Flashcard key={card.card_id} {...card} />)}
                    </div>
                    :
                    <h3>Add some cards to study from above!</h3>
            }

            <div>
                <Modal open={openModal}>
                    <h2>Add new Card</h2>
                    <input value={newCardDetails.username} onChange={(e) => setNewCardDetails(prev => ({ ...prev, username: e.target.value }))} />
                    <input value={newCardDetails.description} onChange={(e) => setNewCardDetails(prev => ({ ...prev, description: e.target.value }))} />
                    <input value={newCardDetails.answer} onChange={(e) => setNewCardDetails(prev => ({ ...prev, answer: e.target.value }))} />
                    <div className='btnContainer'>
                        <button className='btnTheme' type='submit' id='btnAddDeck' onClick={() => handleCreateCard(newCardDetails.username, newCardDetails.description, newCardDetails.answer)}>Create Card</button>
                        <button className='btnTheme' type='button' id='btnAddDeck' onClick={() => setOpenModal(false)}>Cancel</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}


// card list
