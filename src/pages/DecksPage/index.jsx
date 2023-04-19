import React, {useEffect, useState} from 'react'
import { useTheme } from '../../contexts'
import { useNavigate } from 'react-router-dom'

export default function DecksPage(inputText, setInputText) {
    var deckList = ['Maths', 'Chemistry', 'Physics', 'Languages', 'Sports']
    const { theme } = useTheme()
    const [deck, setDeck] = useState([])
    const goTo = useNavigate()

    useEffect(() => {
        setDeck(deckList)

    }, [])
    function handleDivClick(div) {
        goTo(`/decks/${div.target.id}`)
    }
    const addDecks = (e) => {
        e.preventDefault()
        const newDeck = 'Desk'
        setDeck([...deck, newDeck])
        console.log(deck)
        
    }
    return (
    <div>
        <div className='buttons-div'>
            {/* <button>Add Card</button> */}
            <button onClick={addDecks}>+ Add Decks</button>
        </div>
        <div className='deck-list'>
            {deck.map(d => (
                <div key={d} className='deck-card' 
                style={{backgroundColor: `${theme.secColor}`}}
                onClick={handleDivClick} id={d}>
                    <h2>{d}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}
