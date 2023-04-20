import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import Switch from "react-switch"
import { useState } from 'react'
import { useTheme } from '../../contexts'

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
      <NavBar dropdownActive={dropdownActive} setdropdownActive={setdropdownActive} />
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: 30 }}>
        <label htmlFor="material-switch" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 10, color: theme.primText }}>Dark Mode </span>
          <Switch
            checked={checked}
            onChange={(e) => handleChange(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
      </div>
      <main>
        <Outlet />
      </main>

      <footer className={styles.footer} style={{ color: `${theme.primText}` }}>
        <p>made with ❤️ by people <a href="http://" target="_blank" rel="noopener noreferrer"></a></p>

        <p>kaizen</p>
      </footer>
    </div>
  )
}

function NavBar({ dropdownActive, setdropdownActive }) {
  const { theme } = useTheme()

  const linkStyles = ({ isActive }) => ({
    // textDecoration: isActive ? 'underline #FAD97F' : 'none'
    color: isActive ? `${theme.accentColor}` : `${theme.primText}`, padding: '0 10px 0 10px', border: isActive ? `1px solid ${theme.accentColor}` : "1px solid transparent", borderRadius: 10
  })

  return (
    <header  >
      <nav >
        <NavLink to="/" style={linkStyles}>Home</NavLink>
        <NavLink to="stats" style={linkStyles}>Statistics</NavLink>
        <NavLink to="decks" style={linkStyles}>Decks</NavLink>
      </nav>
      <div>
        <button className={styles['dropbtn']} onClick={() => setdropdownActive(prev => !prev)}>
          <i className="fa-regular fa-user"></i>
        </button>
        <div id="myDropdown" className={dropdownActive ? `${styles["dropdown-content"]} ${styles.active}` : `${styles["dropdown-content"]}`}>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </div>
      </div>
    </header>
  )
}
