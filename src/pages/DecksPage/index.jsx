import React, { useEffect, useState } from 'react'

import { Table } from '../../components'

export default function DecksPage() {
    const [decks, setDecks] = useState([])

    useEffect(() => { // get decks 
        const getDecks = async () => {
            let decks = await (await fetch('http://localhost:3000/api/decks')).json()
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
