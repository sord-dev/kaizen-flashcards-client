import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UserForm } from '../../components'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [error, setError] = useState(null);
    const redirect = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData(e.target);

        let user = { username: data.get('username'), password: data.get('password') }

        await login(user);
    }

    const login = async userData => {
        let options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) }
        let response = await fetch('http://localhost:3000/api/auth/login', options);

        if(response.ok) {
            let user = await response.json();
            console.log(user);
            redirect('/')
        }else {
            let error = await response.json();
            setError(error.error)
        }
    }

    return (
        <div>
            <UserForm onSubmit={handleSubmit} error={error}>
                <p>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
            </UserForm>
        </div>
    )
}