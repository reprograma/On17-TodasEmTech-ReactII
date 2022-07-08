import { useState, useEffect } from 'react'

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
     .then(resposta => resposta.json())
     .then(dados => setPokemons(dados.results)) 
  }, [])
  return(
    <>
    {pokemons.map(item => {
      return(
        <ul key={item.name}>
          <li>{item.name}</li>
        </ul>
      )
    })}
    </>
  )
}

export default Pokemon
