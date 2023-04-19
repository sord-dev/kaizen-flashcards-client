import React from 'react'

export default function NewCardForm({deck_id}) {
    const AddCard = async(data)=>{
        const {question,description,answer}= data;
        const options = {
            method : "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                question : question,
                description : description,
                answer : answer
            })
        }
        try{
            const resp = await fetch(`http://localhost:3000/card/${deck_id}`,options)
            if (resp.ok){
               const data = await resp.json();
               
            }
        }
        catch{
            throw new Error ("Unable to get, status code: ",resp.status)
        }
    }
    const handleSub = (e)=>{

        e.preventDefault();
        
        const question = e.target.question.value;
        const description = e.target.Description.value;
        const answer = e.target.Answer.value;
        const data = {question,description,answer}
        AddCard(data)
       // window.location.reload(true);
    }

    return (
    <form onSubmit={handleSub} className='addCard'>
        <label>Question</label>
        <input type='text' name = "question"/>

        <label>Description</label>
        <input type='text' name = "Description"/>

        <label>Answer</label>
        <input type='text' name = "Answer"/>

        <input type = "submit" value = "Add Card"/>
    </form>
  )
}
