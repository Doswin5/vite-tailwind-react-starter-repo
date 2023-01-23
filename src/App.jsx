import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages'
import { Navbar, Footer } from './components'

function App() {

  return (
    <div className="text-center">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
