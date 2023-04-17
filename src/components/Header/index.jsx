import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function index() {
  return (
    <main>
        <header>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="stats">Statistics</NavLink>
                <NavLink to="decks">Decks</NavLink>
                <NavLink to="calender">Calender</NavLink>
            </nav>
        </header>
        <Outlet />
    </main>
  )
}
