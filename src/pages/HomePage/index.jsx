import React from 'react'

export default function HomePage() {
  return (
    <>
        <div>
            <h1>おはよう, user</h1>
        </div>
        <div className='study-quota'>
            <p className='quota-title'><span>Daily Study Quota</span></p>
            <p>You're currently on a <span>4</span> day learning streak, keep it up!</p>
            <a href='#'>Quick Study</a>
        </div>
    </>
  )
}
