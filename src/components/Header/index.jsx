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
            <a href="#" ><img className='profile-img' src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="" /></a>
        </header>
        <Outlet />
    </main>
  )
}
