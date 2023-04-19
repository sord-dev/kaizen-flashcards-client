import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.css'

export default function Layout() {
  const linkStyles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline #FAD97F' : 'none',
  })

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" style={linkStyles} end>Home</NavLink>
          <NavLink to="stats" style={linkStyles}>Statistics</NavLink>
          <NavLink to="decks" style={linkStyles}>Decks</NavLink>
          <NavLink to="calender" style={linkStyles}>Calender</NavLink>
        </nav>
        <a href="#" ><img className='profile-img' src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="profile image" /></a>
      </header>
      <main>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>made with ❤️ by people <a href="http://" target="_blank" rel="noopener noreferrer"></a></p>

        <p>kaizen</p>
      </footer>
    </div>
  )
}
