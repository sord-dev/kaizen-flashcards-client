import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import Switch from "react-switch"
import { useState } from 'react'
import { useTheme } from '../../contexts'
import { Dropdown } from './dropdown'

export default function Layout() {
  const [dropdownActive, setdropdownActive] = useState(false)
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(theme.darkMode)

  const linkStyles = ({ isActive }) => ({
    // textDecoration: isActive ? 'underline #FAD97F' : 'none'
    color: isActive ? `${theme.accentColor}` : `${theme.primText}`, padding: '0 10px 0 10px', border: isActive ? `1px solid ${theme.accentColor}` : "1px solid transparent", borderRadius: 10
  })
  
  function handleChange(e) {
    if (checked) {
      setTheme({'primColor': '#ffffff', 'SecColor': '#151723', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#E6E6E6', 'secBG': "#363842", 'accentColor': '#FAD97F', 'darkMode': false})
      setChecked(false)
    }
    else {
      
      setTheme({'primColor': '#151723', 'SecColor': '#ffffff', 'primText': '#8ed1fc', 'secText': '#333333', 'primBG': '#363842', 'secBG': "#F2F2F2", 'accentColor': '#FAD97F', 'darkMode': true})
      setChecked(true)
    }
  }

  return (
    <div style={{ color: `${theme.secColor}` }}>
      <header  >
        <nav >
          <NavLink to="/" style={linkStyles} end>Home</NavLink>
          <NavLink to="stats" style={linkStyles}>Statistics</NavLink>
          <NavLink to="decks" style={linkStyles}>Decks</NavLink>
        </nav>
        <div class="dropdown">
          <button class="dropbtn" onclick={Dropdown}>
          <i class="fa-regular fa-user"></i>
         </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </header>
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

      <footer className={styles.footer} style={{color: `${theme.primText}`}}>
        <p>made with ❤️ by people <a href="http://" target="_blank" rel="noopener noreferrer"></a></p>

        <p>kaizen</p>
      </footer>
    </div>
  )
}
