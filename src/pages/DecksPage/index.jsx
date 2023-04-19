import React, { useEffect, useState } from 'react'

import { Table,DeckNameForm } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function DecksPage() {
    const { user } = useAuthContext()
    const [decks, setDecks] = useState([])
    const [deckname,setdeckname] = useState("")
    const [showForm,setShowForm] = useState(false)

    const handleDeckNameForm = async ()=>{
        setShowForm(true)
    }
    useEffect(() => { // get decks 
        const getDecks = async () => {
            console.log("new token",localStorage.getItem("token"))
            let options = { method:"GET", headers: { 'Content-Type': 'application/json', 'Authorization' : localStorage.getItem("token")}}
            let decks = await (await fetch("http://localhost:3000/deck/", options)).json()
            setDecks(decks)
        }

        getDecks()
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>All Decks</h1>
            <Table items={decks} onClick={handleDeckNameForm} />
            {showForm ? <DeckNameForm setShowForm ={setShowForm} /> : null }
        </>
    )
}
