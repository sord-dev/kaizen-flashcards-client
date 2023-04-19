import React from 'react'
import { useTheme } from '../../contexts'
import styles from './style.module.css'

export default function Modal({ open, children }) {
    if (!open) return null

    const { theme } = useTheme()

    return (
        <div className='overlay'>
            <div className="modalContainer" style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
                {children}
            </div>
        </div>
    )
}
