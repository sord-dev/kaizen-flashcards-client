import * as Pages from './pages'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
      </Routes>
    </>
  )
}

export default App
