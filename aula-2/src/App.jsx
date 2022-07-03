import filmes from './dados'

function App() {
  return (
    <div className="App">
     {filmes.map(item => {
       return(
         <div key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.genero}</p>
            <img src={item.capa}/>
         </div>
       )
     })}
      <button 
        onClick={console.log('estou clicando')}>
          Clica aqui
      </button>
      <input 
        placeholder="digite seu nome" 
        onChange={e => console.log(e.target.value)}
      />
    </div>
  )
}

export default App
