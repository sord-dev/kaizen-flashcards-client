import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { Modal } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeckPage() {
    const navigate = useNavigate()
    const [deck, setCards] = useState({ cards: []})
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
        <div style={{color: theme.primText}}>
        <h1>{deck.name}</h1>
        <p>Start learning or add a card to expand your deck</p>
            <div className='buttons-div'>
                {/* <button>Add Card</button> */}
                <button className='btnTheme' onClick={addCard}>+ Add Card</button>
                {deck?.cards.length ? <button className='btnTheme' onClick={() => navigate('learn')}>Start Learning</button> : null}
            </div>
           
            <div>
                <Modal open={openModal} close={() => setOpenModal(false)} title='Add new card' />
            </div>
        </div>
    )
}


// card list
// {deck ? <div className='card-list'>
// {deck?.cards.map((card, index) => {
//     const color = '#' + Math.floor(Math.random() * 16777215).toString(16)

//     return (
//         <div className='card' key={index} style={{ backgroundColor: `${theme.secBG}`, color: `${theme.primText}`, borderLeft: `20px solid ${color}` }}>
//             <p className='card-content'>{card.question}</p>
//         </div>
//     )
// })}
// </div> : null}