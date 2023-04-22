import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext'

export default function UseAuth() {
    const { user, logout } = useAuthContext()

    return (
        <>
            {user?.username ? <Outlet /> : <StripUser logout={logout} />}
        </>
    )
}

function StripUser({ logout }) {
    useEffect(() => { // as soon as component loads, logout
        logout()
    }, [])
}