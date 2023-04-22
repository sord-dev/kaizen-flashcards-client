import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import { useState } from 'react'
import { useTheme } from '../../contexts'
import { useAuthContext } from '../../contexts/authContext'
import Switch from '../Switch'

export default function Layout() {
  const [dropdownActive, setdropdownActive] = useState(false)
  const { theme, setTheme, themes } = useTheme()
  const [checked, setChecked] = useState(theme.darkMode)


  function handleChange() {
    if (checked) {
      setTheme(themes.light)
      setChecked(false)
    }
    else {
      setTheme(themes.dark)
      setChecked(true)
    }
  }

  useEffect(() => {
    console.log(dropdownActive);
  }, [dropdownActive])

  return (
    <div style={{ color: `${theme.secColor}` }}>
      <NavBar dropdownActive={dropdownActive} setdropdownActive={setdropdownActive} handleChange={handleChange} checked={checked} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}


function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer} style={{ color: `${theme.primText}` }}>
      <p>Made with ❤️ by <a href="http://github.com/sord-dev" target="_blank" rel="noopener noreferrer">stef</a>, <a href="https://github.com/BritishBambi" target="_blank" rel="noopener noreferrer">jojo</a>, <a href="https://github.com/farhan3311" target="_blank" rel="noopener noreferrer">jack</a> and <a href="https://github.com/wag154" target="_blank" rel="noopener noreferrer">farhan</a> </p>

      <p>Kaizen | Constant Improvement</p>
    </footer>
  )
}

function NavBar({ dropdownActive, setdropdownActive, handleChange, checked }) {
  const { theme } = useTheme()
  const { user, logout } = useAuthContext()

  const linkStyles = ({ isActive }) => ({
    // textDecoration: isActive ? 'underline #FAD97F' : 'none'
    color: isActive ? `${theme.accentColor}` : `${theme.primText}`, padding: '0 10px 0 10px', border: isActive ? `1px solid ${theme.accentColor}` : "1px solid transparent", borderRadius: 10
  })

  return (
    <header  >
      <nav >
        <NavLink to="/" style={linkStyles}>Home</NavLink>
        <NavLink to="decks" style={linkStyles}>Decks</NavLink>
        <NavLink to="/stats" style={linkStyles}>Stats</NavLink>
      </nav>
      <div>

        <div style={{ display: 'flex', gap: '1em' }}>
          <button className={styles['dropbtn']} onClick={() => setdropdownActive(prev => !prev)}>
            <i className="fa-regular fa-user"></i>
          </button>
          <Switch handleChange={handleChange} checked={checked} />
        </div>


        <div id="myDropdown" className={dropdownActive ? `${styles["dropdown-content"]} ${styles.active}` : `${styles["dropdown-content"]}`}>
          {
            user?.username ?
              (
                <NavLink to={'login'} onClick={logout}>Logout</NavLink>
              )
              :
              (
                <>
                  <NavLink to="login">Login</NavLink>
                  <NavLink to="register">Register</NavLink>
                </>
              )
          }

        </div>
      </div>
    </header>
  )
}
