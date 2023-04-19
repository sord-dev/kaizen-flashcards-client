import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { Flashcard, Modal } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeckPage() {
    const navigate = useNavigate()
    const [deck, setCards] = useState({ cards: [] })
    const { deck_id } = useParams()
    const [openModal, setOpenModal] = useState()
    const { theme } = useTheme()

    const addCard = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    useEffect(() => {
        const getDeck = async () => {
            const deck = await (await fetch(`http://localhost:3000/deck/${deck_id}`)).json()

            setCards(deck);
        }

        getDeck()
    }, [])

    return (
        <div style={{ color: theme.primText }}>
            <h1>{deck.name}</h1>
            <p>{deck.cards.length} cards</p>
            <p>Start learning or add a card to expand your deck</p>
            
            <div className='buttons-div'>
                <button className='btnTheme' onClick={addCard}>+ Add Card</button>
                {deck?.cards.length ? <button className='btnTheme' onClick={() => navigate('learn')}>Start Learning</button> : null}
            </div>

            {deck.cards.length ?
                <div className='card-list'>
                    {deck?.cards.map((card) => <Flashcard key={card.card_id} {...card} />)}
                </div>
                : <h3>Add some cards to study from above!</h3>}

            <div>
                <Modal open={openModal} close={() => setOpenModal(false)} title='Add new card' buttonLabel='Add Card' />
            </div>
        </div>
    )
}


// card list
