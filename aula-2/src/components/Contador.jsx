import { useState, useEffect } from 'react'
// não posso esquecer de importar o useState de dentro do react

function Contador() {
  // chamar o useState desestruturando um array que recebe 
  // 2 informacões: variavel, funcao atualizadora da variavel
  // Dentro do parametro do useState vai o valor inicial da variavel
  const [contador, setContador] = useState(0)
  
  // criar uma função que será chamada no onclick 
  // essa função recebe a regra que vai dentro da funça2o atualizadora
  function incrementa() {
    setContador(contador + 1)
  }

  useEffect(() => {
    document.title = contador
     return () => document.title = 'Reprograma ReactJS'
  }, [contador])

  return (
    <>
      {/* dentro do elemento que eu quero mostrar na tela eu chamo minha variavel */}
      <h1>{contador}</h1> 
      {/* dentro do meu botao eu chamo a função que está chamando a função atualizadora */}
      <button onClick={incrementa}>Conta +1</button>
    </>
  )
}

export default Contador