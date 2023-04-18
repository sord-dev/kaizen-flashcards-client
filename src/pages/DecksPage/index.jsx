import React, { useEffect, useState } from 'react'

import { Table } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function DecksPage() {
    const { user } = useAuthContext()
    const [decks, setDecks] = useState([])

    useEffect(() => { // get decks 
        const getDecks = async () => {
            let options = { method: "POST", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({user_id: user.user_id}) } 
            let decks = await (await fetch("http://localhost:3000/deck", options)).json()
            setDecks(decks)
        }

        getDecks()
    }, [])

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>All Decks</h1>
            <Table items={decks} />
        </>
    )
}
