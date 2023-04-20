import React from 'react'

export default async function ShowResultCard({correct = "",question ="",answer ="",description = ""}) {
   let quickStyle = {
    color :"red"
   }
   console.log("Inside", correct,  question,  answer,  description)
   if ( correct == true){
     quickStyle = {
        color:"green"
    }
    console.log("Style :",quickStyle)
   }
    return (
    <>
    <h1>{  question}</h1>
    <p1>{ description}</p1>
    <p1 style = { quickStyle}>{ answer}</p1>
    </>
  )
}
