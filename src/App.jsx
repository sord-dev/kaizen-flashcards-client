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

          <Route path='/decks' >
            <Route index element={<Pages.DecksPage />} />

            <Route path=':deck_id'>
              <Route index element={<Pages.DeckSummary />} />
              <Route path='learn' element={<Pages.LearnPage />} />
            </Route>

          </Route>

          <Route path={'/*'} element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
