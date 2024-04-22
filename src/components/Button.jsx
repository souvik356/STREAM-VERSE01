import {Link} from 'react-router-dom'
const Button = ({data})=>{
  return(
    <>
       <Link  to={'/feed/'+data}><button className='bg-zinc-300 p-2 rounded-xl'>{data}</button></Link>
    </>
  )
}
export default Button