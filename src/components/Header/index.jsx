import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const styles = ({isActive}) => ({
    textDecoration: isActive ? 'underline #FAD97F' : 'none',
})

export default function index() {
  return (
    <main>
        <header>
            <nav>
                <NavLink to="/" style={styles} end>Home</NavLink>
                <NavLink to="stats" style={styles}>Statistics</NavLink>
                <NavLink to="decks" style={styles}>Decks</NavLink>
                <NavLink to="calender" style={styles}>Calender</NavLink>
            </nav>
        </header>
        <Outlet />
    </main>
  )
}
