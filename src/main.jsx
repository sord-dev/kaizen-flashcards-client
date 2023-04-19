import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from './contexts'


  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <React.StrictMode>
    <ThemeProvider>
    <App />

    </ThemeProvider>
    </React.StrictMode>
    </BrowserRouter>
  )
