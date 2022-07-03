import { useState } from 'react'

const Relogio = () => {
  let time = new Date().toLocaleTimeString()
  const [horario, setHorario]= useState(time)

  const atualizaTime = () => {
    time = new Date().toLocaleTimeString()
    setHorario(time)
  }

  setInterval(atualizaTime, 1000)
  return(
    <>
      <h1>Horário local:{horario}</h1> 
    </>
  )
}

export default Relogio