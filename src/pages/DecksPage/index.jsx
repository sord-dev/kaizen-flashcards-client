import React, {useEffect, useState} from 'react'
import { useTheme } from '../../contexts'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components'

export default function DecksPage(inputText, setInputText) {
    var deckList = ['Maths', 'Chemistry', 'Physics', 'Languages', 'Sports']
    const { theme } = useTheme()
    const [deck, setDeck] = useState([])
    const [ openModal, setOpenModal ] = useState()
    const goTo = useNavigate()

    useEffect(() => {
        setDeck(deckList)

    }, [])
    function handleDivClick(div) {
        goTo(`/decks/${div.target.id}`)
    }
    const addDecks = (e) => {
        e.preventDefault()
        setOpenModal(true)
        const newDeck = 'Desk'
        setDeck([...deck, newDeck])
        console.log(deck)
        
    }
    return (
    <div>
        <button className='btnTheme' onClick={addDecks}>+ Add Decks</button>
        <div className='deck-list'>
            {deck.map(d => (
                <div key={d} className='deck-card' 
                style={{backgroundColor: `${theme.primBG}`}}
                onClick={handleDivClick} id={d}>
                    <h2>{d}</h2>
                </div>
            ))}
        </div>
        <div>
            <Modal open={openModal} close={() => setOpenModal(false)} title='Add new deck'></Modal>
        </div>
    </div>
  )
}
