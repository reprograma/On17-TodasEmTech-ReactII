import './footer.css'

function Footer(props){
  return (
    <div className='footer'>
      <p className='footer-text'>{props.children}</p>
    </div>
  )
}

export default Footer