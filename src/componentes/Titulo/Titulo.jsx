import './titulo.css'
function Titulo(props){
  return (
    <div className='div-title'>
      <h1 className='title'>{props.title}</h1>
    </div>
  )
}
export default Titulo