import { useState } from 'react'

function Home() {
  return (
    <div>
      <h1>Quantas pessoas acham o Donizildo gay?</h1>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1)

  function adicionarContador() {
    setContador(contador + 1)
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Se acha o Donizildo gay, clica aqui</button>
    </div>
    
  )
}

export default Home
