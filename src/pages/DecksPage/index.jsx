import React, { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function DecksPage() {
    const { user } = useAuthContext()
    const [decks, setDecks] = useState([])
    const [openModal, setOpenModal] = useState()
    const [deckName, setDeckName] = useState()
    const { theme } = useTheme();

    const addDecks = (e) => {
        e.preventDefault()

        setOpenModal(true)
    }

    const handleCreateDeck = async (name) => {
        const deck = { user_id: user.user_id, name }
        let options = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(deck) }
        let deck_id = await (await fetch("http://localhost:3000/deck/new", options)).json()

        console.log(deck_id);
        setDecks(prev => [...prev, { ...deck, deck_id }])
        setOpenModal(false)
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
                console.log(decks);
                setDecks(decks)
            } else {
                console.log(await res.text());
            }

        }
        getDecks()
    }, [])


    return (
        <div>
            <button className='btnTheme' onClick={addDecks}>+ Add Decks</button>

            <div className='deck-list'>
                {decks.length ? decks.map(d => (<DeckCard key={d.deck_id} removeDeck={removeDeck} deck={d} />)) : <h2 style={{ color: theme.primText }}>Click add deck to create a deck to learn from!</h2>}
            </div>


            <Modal open={openModal}>
                <h2>Add new deck</h2>
                <input id='newDeckInput' value={deckName} onChange={(e) => setDeckName(e.target.value)}></input>
                <div className='btnContainer'>
                    <button className='btnTheme' type='submit' id='btnAddDeck' onClick={() => handleCreateDeck(deckName)}>Create Deck</button>
                    <button className='btnTheme' type='button' id='btnAddDeck' onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            </Modal>

        </div>
    )
}
//<Modal open={openModal} close={() => setOpenModal(false)} title='Add new deck' addDeck={handleCreateDeck}></Modal>

function DeckCard({ deck, removeDeck }) {
    const { theme } = useTheme();
    const remove = {
        border: "none",
        color: "red",
        cursor: 'pointer',
        fontSize: '.9em'
    }

    const learn = {
        border: "none",
        color: "green",
        cursor: 'pointer',
        fontSize: '.9em'
    }
    const goTo = useNavigate();

    let { name, deck_id } = deck;

    return (
        <div className='deck-card'
            style={{ backgroundColor: `${theme.primBG}` }}
        >
            <h2>{name}</h2>
            <div style={{ display: 'flex', gap: '1em', margin: '6px 12px' }}>
                <p style={learn} onClick={() => goTo(`/decks/${deck_id}`)}><i class="fa-solid fa-book"></i></p>
                <p style={remove} onClick={() => removeDeck(deck_id)}><i class="fa-solid fa-trash"></i></p>
            </div>
        </div>
    )
}