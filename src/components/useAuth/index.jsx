import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext'

export default function UseAuth() {
    const { user } = useAuthContext()

    return (
        <>
            {user?.username ? <Outlet /> : <Navigate to={'/login'} />}
        </>
    )
}