import './projetos.css'
import Dados from './Dados'

const Projetos = () => {
    return (
      <>
        <div className="projects-container">
          {Dados.map((projeto) => {
            
            return(
              <div className="project-card">
                <h1>{projeto.title}</h1>
                <img src={projeto.gif} alt={projeto.title} />
                <p>{projeto.description}</p>
                <a href={projeto.link} target="_blank" className='enter-repo'>⤴</a>
              </div>
            )
            
            })}
        </div>
      </>
    );
}


export default Projetos

