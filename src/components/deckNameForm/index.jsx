import React from 'react'

export default function deckNameForm({setShowForm,setdeckname}) {
    const handleSub = (e)=>{
        e.preventDefault();
        const name = e.target.deckName.value;
        setShowForm(false)
    }
    const handleCreateDeck = async () => {
         const deck = {user_id: user.user_id, name: ""}
         let options = { method: "POST", headers: { 'Content-Type': 'application/json'
        // ,"authorization" : localStorage.getItem("token")
        }, body: JSON.stringify(deck) } 
         let deck_id = await (await fetch("http://localhost:3000/deck/new", options)).json()

        setDecks(prev => [...prev, {...deck, deck_id}]) 
    }
    return (
    <form onSubmit={handleSub}>
        <label>
            Deck Name:
        </label>
        <input name = "deckName" type = "text"/>
        <input type = "submit" value = "Create Deck?"/>
    </form>
  )
}
