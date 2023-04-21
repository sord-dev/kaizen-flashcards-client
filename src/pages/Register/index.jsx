import React from 'react'
import { Link } from 'react-router-dom'

import { UserForm } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

import { useTheme } from '../../contexts'

export default function Login() {

    const { theme } = useTheme()

    const { register, error } = useAuthContext()

    const handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData(e.target);

        let user = { username: data.get('username'), password: data.get('password') }

        await register(user);
    }

    return (
        <div>
            <UserForm onSubmit={handleSubmit} error={error} buttonLabel='Register'>
                <p style={{ color: `${theme.primText}` }}>Already have an account? <Link to={'/login'} style={{ color: `${theme.linkForm}` }}>Login</Link></p>
            </UserForm>
        </div>
    )
}