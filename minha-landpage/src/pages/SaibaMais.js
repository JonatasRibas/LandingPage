import { useNavigate } from 'react-router-dom'

function SaibaMais() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '60px', textAlign: 'center' }}>
      <h1>Mais informações</h1>
      <p>
        Obrigado por clicar! Aqui você pode colocar qualquer conteúdo adicional.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Voltar para Home
      </button>
    </div>
  )
}

export default SaibaMais
