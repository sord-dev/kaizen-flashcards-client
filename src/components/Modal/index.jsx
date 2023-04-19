import React from 'react'
import { useTheme } from '../../contexts'

export function Modal({open, close, title, newDeck}) {
    if(!open) return null
    const {theme} = useTheme()

    return (
        <div className='overlay'>
        <div className="modalContainer" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
            <h2>{title}</h2>
            <input id='newDeckInput' value={newDeck}></input>
            <div className='btnContainer'>
                
                <button className='btnTheme' type='submit' id='btnAddDeck'>Add Deck</button>
                <button className='btnTheme' type='button' id='btnAddDeck' onClick={close}>Cancel</button>
            </div>
        </div>
        </div>
    )
}
