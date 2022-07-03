import { useState, useEffect } from 'react'

const Repositorios = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  const [filteredRepos, setFilteredRepos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
      const data = await response.json()

      setRepos(data)
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  }, [repos, search])

  return(
    <>
      <input 
        placeholder="Digite um termo"
        onChange={handleSearch}
      />
      <ul>
        {filteredRepos.map(repo => {
          return(
            <li key={repo.id}>
              {repo.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Repositorios