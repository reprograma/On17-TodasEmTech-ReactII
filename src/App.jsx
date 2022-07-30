import Footer from './componentes/Footer/Footer'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import Repositorios from './componentes/Repositorios/Repositorios'
import Texto from './componentes/Textos/Textos'
import Titulo from './componentes/Titulo/Titulo'
import Imagem from './componentes/Imagem/Imagem'
import Projetos from './componentes/Projetos/Projetos'
import './App.css'
import Navbar from './componentes/Titulo/Titulo'
import Header from './componentes/Header/Header'
import Separador from './componentes/Separador/Separador'

function App() {

    return (
        <>
            <nav>
                <Titulo 
                    title="Meu Portifólio Reprograma"
                />
            </nav>

            <header>
                <Header
                    title="Oi, eu sou Pietra Tenório"
                    description="Estudante do projeto #TodasEmTech da {reprograma}"
                />
                <Separador />
            </header>

            <section>
                <Apresentacao 
                    children="Alguns projetinho feito na {reprograma}"
                />
                <Projetos />
            </section>

            <article>
                < Repositorios/>
            </article>

            <footer>
                <Footer> Desenvolvid por Pietra Tenorio | Reprograma | 2022</Footer>
            </footer>
        </>
    )
}
  export default App