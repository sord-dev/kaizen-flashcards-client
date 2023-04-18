import * as Pages from './pages'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Pages.HomePage />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path='/register' element={<Pages.Register />} />
          <Route path='/stats' element={<Pages.StatsPage />} />
          <Route path='/decks' element={<Pages.DecksPage />} />
        </Route>
        <Route path={'/*'} element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

export default App
