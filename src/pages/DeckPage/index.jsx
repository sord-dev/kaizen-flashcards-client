import React from 'react'
import { useTheme } from '../../contexts'
export default function DeckPage() {
    const cards = ["Card 1",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Card 3",
        "Card 4",
        "Card 5",
        "Card 6",
        "Card 7"
    ]
    const {theme} = useTheme()
    //random hex color code
    console.log(theme)
  return (
    <div>
        <div className='buttons-div'>
            {/* <button>Add Card</button> */}
            <button >+ Add Card</button>
        </div>
        <div className='card-list'>
            {cards.map((card, index) => {
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16)        

                return (
                    <div className='card' key={index} style={{backgroundColor: `${theme.secColor}`, color:`${theme.primColor}`, borderLeft: `20px solid ${color}`}}>
                        <p className='card-content'>{card}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
