import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'

import { DeckList, Modal } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function DecksPage() {
    const { user } = useAuthContext()
    const [decks, setDecks] = useState([])
    const [openModal, setOpenModal] = useState()
    const [deckName, setDeckName] = useState()
    const { theme } = useTheme();

    const handleCreateDeck = async (name) => {
        const deck = { user_id: user.user_id, name }
        let options = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(deck) }
        let deck_id = await (await fetch("http://localhost:3000/deck/new", options)).json()

        setDecks(prev => [...prev, { ...deck, deck_id }])
        setOpenModal(false)
        setDeckName("")
    }

    const removeDeck = async deck_id => {
        const options = {
            method: "DELETE"
        }
        try {
            const resp = await fetch(`http://localhost:3000/deck/${deck_id}`, options)
            if (resp.ok) {
                let newDecks = decks.filter(deck => deck.deck_id !== deck_id)
                setDecks(newDecks)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { // get decks 
        const getDecks = async () => {
            let options = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user_id: user.user_id }) }
            let res = await fetch("http://localhost:3000/deck", options)

            if (res.ok) {
                let decks = await res.json()

                setDecks(decks)
            } else {
                console.log(await res.text());
            }

        }
        getDecks()
    }, [])

    return (
        <div style={{ color: theme.primText }}>
            <h3>Click the learn button on a deck to start learning or add a new deck!</h3>
            <p>{decks.length >= 1 ? `Currently ${decks.length} deck.` : `Currently ${decks.length} decks.`}</p>
            <button className='btnTheme' onClick={() => setOpenModal(true)}>+ Add Decks</button>

            <DeckList decks={decks} removeDeck={removeDeck}/>

            <Modal open={openModal}>
                <h2>Add new deck</h2>
                <input value={deckName} onChange={(e) => setDeckName(e.target.value)} />

                <div className='btnContainer'>
                    <button className='btnTheme' type='submit' onClick={() => handleCreateDeck(deckName)}>Create Deck</button>
                    <button className='btnTheme' type='button' onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

