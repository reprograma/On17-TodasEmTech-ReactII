import './apresentacao.css'
function Apresentacao (props){
  return (
    <div className='div-apresentacao'>
      <h2 className="apresentacao">{props.children}</h2>
    </div>
  )
}

export default Apresentacao