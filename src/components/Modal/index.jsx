import React, { useState } from 'react'
import { useTheme } from '../../contexts'
import styles from './style.module.css'

export default function Modal({open, close, title, addDeck, buttonLabel = 'Add Deck'}) {
    if(!open) return null

    const [deckName,setDeckName] = useState("");
    const {theme} = useTheme()

    return (
        <div className={`${styles['styles']}`}>
        <div className="modalContainer" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
            <h2>{title}</h2>
            <input id='newDeckInput' value={deckName} onChange={(e) => setDeckName(e.target.value)}></input>
            <div className='btnContainer'>
                <button className='btnTheme' type='submit' id='btnAddDeck' onClick={() => addDeck(deckName)}>{buttonLabel}</button>
                <button className='btnTheme' type='button' id='btnAddDeck' onClick={close}>Cancel</button>
            </div>
        </div>
        </div>
    )
}
