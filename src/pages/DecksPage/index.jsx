import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function DecksPage() {
    const { user } = useAuthContext()

    const [decks, setDecks] = useState([])
    const [openModal, setOpenModal] = useState()
    


    const addDecks = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    

    const handleCreateDeck = async (name) => {
        const deck = {user_id: user.user_id, name }
        let options = { method: "POST", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(deck) } 
        let deck_id = await (await fetch("http://localhost:3000/deck/new", options)).json()

        setDecks(prev => [...prev, {...deck, deck_id}]) 
    }

    useEffect(() => { // get decks 
        const getDecks = async () => {
            let options = { method: "POST", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({user_id: user.user_id}) } 
            let decks = await (await fetch("http://localhost:3000/deck", options)).json()
            console.log(decks);
            setDecks(decks)
        }

        getDecks()
    }, [])


    return (
        <div>
            <button className='btnTheme' onClick={addDecks}>+ Add Decks</button>
            
            <div className='deck-list'>
                {decks.map(d => (<DeckCard key={d.deck_id} deck={d} />))}
            </div>

            <div>
                <Modal open={openModal} close={() => setOpenModal(false)} title='Add new deck' addDeck={handleCreateDeck}></Modal>
            </div>
        </div>
    )
}

function DeckCard({ deck }) {
    const { theme } = useTheme();

    const goTo = useNavigate();

    let { name, user_id, deck_id } = deck;

    return (
        <div className='deck-card'
            style={{ backgroundColor: `${theme.primBG}` }}
            onClick={() => goTo(`/decks/${deck_id}`)}>
            <h2>{name}</h2>
        </div>
    )
}