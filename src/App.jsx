import * as Pages from './pages'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/" element={<Pages.HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
