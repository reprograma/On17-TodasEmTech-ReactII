import filmes from '../dados'

function Cards() {
  return(
    <div className="cards">
      {filmes.map(item => {
        return(
          <div key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.genero}</p>
            <img src={item.capa}/>
          </div>
        )
      }
    )}
    </div>
  )
}

export default Cards