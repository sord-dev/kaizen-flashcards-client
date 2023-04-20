import React from 'react'
import { useTheme } from '../../contexts'
import styles from './style.module.css'

export default function Flashcard({ question, answer,card_id }) {
    const { theme } = useTheme()
    const remove = {
        border : "none",
        color : "red",
        backgroundColor:"inherit",
        cursor: 'pointer'
    }
    const removeCard = async()=>{
        const options = {
            method : "DELETE"
        }
        try{
           const resp = await fetch(`http://localhost:3000/card/${card_id}`,options)
           if (resp.ok){
            window.location.reload(true)
           }
        }
        catch{
            throw new Error("Unable to Delete, status code :",resp.status)
        }
    }
    return (
        <div className={styles['card-border']} style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
            <div className='card-content'>
                <h3>{question}</h3>
                <p>{answer}</p>
                <button style = {remove} onClick={removeCard}>Remove</button>
            </div>
        </div>

    )
}
