import React from 'react'
import { useTheme } from '../../contexts'

export default function Modal({ open, children }) {
    if (!open) return null

    const { theme } = useTheme()

    return (
        <div className='overlay' role='modal'>
            <div className="modalContainer" style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
                {children}
            </div>
        </div>
    )
}
