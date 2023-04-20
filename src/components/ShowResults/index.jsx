import React, { useEffect, useState } from 'react'
import {ShowResultCard} from "../../components"

export default async function ShowResults({result=[]}) {
    const [card,setCard] = useState([])

// useEffect(()=>{
//     const getCard =async()=>{
//           try{  
//             let Arr = [];  
//             console.log("Here")
//             result.map(async e =>{
//                 const resp = await (await fetch(`http://localhost:3000/card/getCard/${result.card_id}`)).json();
//                 Arr.push(resp)
//             })
//             const data =await Promise.all(Arr)
//             console.log(data)
//             setCard(data)
//              }
//                 catch(e){
//                     console.log("error",e)
//                 }
//             }
//             getCard();
// },[]) 
   console.log("results before",result)
    return (
    <>
    <div><h1>hello world</h1></div>
    </>
  )
}

//{result.map((e) => (<ShowResultCard  {...e}/>)) }
