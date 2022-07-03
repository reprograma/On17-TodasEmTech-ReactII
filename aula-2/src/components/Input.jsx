function Input() {
  return(
    <input 
        placeholder="digite seu nome" 
        onChange={e => console.log(e.target.value)}
      />
  )
}

export default Input