import React from 'react'
import { Link } from 'react-router-dom'

import { UserForm } from '../../components'
import { useAuthContext } from '../../contexts/authContext'

export default function Login() {
    const { register, error } = useAuthContext()

    const handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData(e.target);

        let user = { username: data.get('username'), password: data.get('password') }

        await register(user);
    }

    return (
        <div>
            <UserForm onSubmit={handleSubmit} error={error}>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            </UserForm>
        </div>
    )
}