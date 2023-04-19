import React from 'react'
import { useTheme } from '../../contexts'

export default function Flashcard({ question, answer }) {
    const { theme } = useTheme()

    return (
        <div className='card' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, borderLeft: `20px solid blue` }}>
            <div className='card-content'>
                <h3>{question}</h3>
                <p>{answer}</p>
            </div>
        </div>

    )
}
