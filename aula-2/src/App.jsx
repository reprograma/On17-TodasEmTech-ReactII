import { useState } from 'react'
// import Contador from './components/Contador'
import Pokemon from './components/Pokemon'

function App() {
  // const [visivel, setVisivel] = useState(true)

  // setTimeout(() => (
  //   setVisivel(false)
  // ), 5000)
  
  return (
    <div className="App">
     {/* {visivel &&  <Contador />} */}
     <Pokemon />
    </div>
  )
}

export default App
