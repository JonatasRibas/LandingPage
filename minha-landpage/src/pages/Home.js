import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="hero">
      <div className="content">
        <h1>Transforme suas ideias em realidade</h1>
        <p>
          Crie, lance e impressione com uma landing page moderna feita em React.
        </p>
        <button onClick={() => navigate('/saiba-mais')}>Saiba Mais</button>
      </div>
    </div>
  )
}

export default Home
