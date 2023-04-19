import React from 'react'
import { useTheme } from '../../contexts'
import styles from './style.module.css'

export default function Flashcard({ question, answer }) {
    const { theme } = useTheme()

    return (
        <div className={styles['card-border']} style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
            <div className='card-content'>
                <h3>{question}</h3>
                <p>{answer}</p>
            </div>
        </div>

    )
}
