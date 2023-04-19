import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts'

import { AuthContextProvider } from './contexts/authContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </AuthContextProvider>
  </BrowserRouter>
)
