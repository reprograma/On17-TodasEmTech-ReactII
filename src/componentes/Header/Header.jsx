import './header.css'
function Header(props){
  return (
    <div className='div-header'>
        <img src="https://scontent.fcgh3-1.fna.fbcdn.net/v/t39.30808-6/295832030_545119547362943_7944327702391836808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF3IGy0XdWeBFFVC8DKvfrSJ1LdwzGihcEnUt3DMaKFwZwPYcHuLx_XYAzD0bIk6fBfsnJrZWRwBTTFiw-_i5Xh&_nc_ohc=mrEY-RvgZPcAX8ARf4Y&_nc_ht=scontent.fcgh3-1.fna&oh=00_AT_jjtTkUGHdwKVXcyaz7nm317xZkg12VT6KilGIF3IDZg&oe=62E33B5A" 
            alt="meu gif" 
        />
        <div className='prazer'>
            <h1 className='title'>{props.title}</h1>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  )
}
export default Header