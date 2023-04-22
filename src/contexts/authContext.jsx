import React, { useState, createContext, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const redirect = useNavigate()

    const login = async userData => {
        let options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) }
        let response = await fetch('http://localhost:3000/auth/login', options);

        if (response.ok) {
            let user = await response.json();
            localStorage.setItem('user', JSON.stringify(user));

            setUser(user);
            redirect('/');
        } else {
            let error = await response.json();
            setError(error.error);
        }
    }
    const register = async userData => {
        let options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) }
        let response = await fetch('http://localhost:3000/auth/register', options);

        if (response.ok) {
            let user = await response.json();
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem("token", user.Token)
            setUser(user);
            redirect('/');
        } else {
            let error = await response.json();
            setError(error.error);
        }
    }

    const logout = async () => {
        localStorage.removeItem('user');
        setUser(null)

        redirect('/login');
    }

    useEffect(() => {
        if (!user) {
            let cached = localStorage.getItem("user")
            if (cached) setUser(JSON.parse(cached))
        }
    }, [user])

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <AuthContext.Provider value={{ user, error, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);