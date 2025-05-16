import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </Router>
  )
}

export default App
