import * as Pages from './pages'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout, UseAuth } from './components'
import { Navigate } from 'react-router-dom'
import { useTheme } from './contexts'

function App() {
  const { theme } = useTheme()
  return (
    <div>
      <style>{`body { background-color: ${theme.primColor};`}</style>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Pages.HomePage />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path='/register' element={<Pages.Register />} />
          <Route path='/stats' element={<Pages.StatsPage />} />
          <Route element={<UseAuth />}>
            <Route path='/decks' element={<Pages.DecksPage />} />
            <Route path='/decks/:deck_id' element={<Pages.DeckPage />} />
            <Route path='/decks/:deck_id/learn' element={<Pages.LearnPage />} />
          </Route>
        </Route>
        <Route path={'/*'} element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  )
}

export default App
