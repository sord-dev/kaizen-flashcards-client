import React from 'react'
import { useTheme } from '../../contexts'

export default function Flashcard({ question, answer, card_id, removeCard = () => {} }) {
    const { theme } = useTheme()
    const remove = {
        border : "none",
        color : "red",
        backgroundColor:"inherit",
        cursor: 'pointer'
    }
   
    return (
        <div className='card' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, borderLeft: `20px solid blue` }}>
            <div className='card-content'>
                <h3>{question}</h3>
                <p>{answer}</p>
                <button style = {remove} onClick={() => removeCard(card_id)}>Remove</button>
            </div>
        </div>

    )
}
