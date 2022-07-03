import { useState, useEffect } from 'react'

const Personagens = () => {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setPersonagens(data.results))
  }, [])

  return (
    <>
     {personagens.map(personagem => {
       return(
        <div key={personagem.id} className="cards" >
          <h2>{personagem.name}</h2>
          <img src={personagem.image} alt={personagem.name} />
        </div>
       )
     })}
    </>
  )
}

export default Personagens