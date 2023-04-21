import React from 'react'
import { Link } from 'react-router-dom'

import { UserForm } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

import { useTheme } from '../../contexts'

export default function Login() {

    const { theme } = useTheme()

    const { login, error } = useAuthContext()

    const handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData(e.target);

        let user = { username: data.get('username'), password: data.get('password') }

        await login(user);
    }

    return (
        <div>
            <UserForm onSubmit={handleSubmit} error={error}>
                <p style={{ color: `${theme.primText}` }}>Don't have an account? <Link to={'/register'} style={{ color: `${theme.linkForm}` }}>Sign up</Link></p>
            </UserForm>
        </div>
    )
}