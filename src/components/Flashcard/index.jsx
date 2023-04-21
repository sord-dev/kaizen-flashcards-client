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
        <div className='cardTheme' style={{ backgroundColor: `${theme.accentColor}`, color: `${theme.cardText}` }}>
            <div className='card-content'>
                <h3>{question}</h3>
                <p>{answer}</p>
                <button style = {remove} onClick={() => removeCard(card_id)}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>

    )
}