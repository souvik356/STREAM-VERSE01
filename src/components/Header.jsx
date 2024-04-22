import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { FaFireFlameCurved } from "react-icons/fa6";

const Header = ()=>{
  const [search,setSearch] = useState('');
  const [suggestions,setSuggestions] = useState([])
  //console.log(search);
  useEffect(()=>{
     //API CALL
    const timer =setTimeout(()=>getSuggestions(),300);
    return ()=>{
      clearTimeout(timer);
    }
  },[search])
  const getSuggestions = async ()=>{
    console.log(search);
    const data = await fetch(YOUTUBE_SEARCH_API+ search);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  }
  const dispatch = useDispatch();
  const handleToggle = ()=>{
    dispatch(toggleMenu());
  }
  return(
    <>
      <div className='relative flex items-center justify-between shadow-xl p-2'>
        <div className=' flex items-center gap-5'>
        <img onClick={handleToggle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' className='w-[40px] cursor-pointer'/>
        <div>
        <Link to='/'>
          <div className='flex items-center gap-3 font-bold'><FaFireFlameCurved /> <span>STREAM-VERSE</span></div>
        </Link>
        </div>
        </div>
        <div className='flex'>
          <input className='w-[400px] rounded-2xl p-2 bg-zinc-200' type='text' placeholder = 'Enter your Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div>
          <img src='https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' className='w-[50px]'/>
        </div>
      </div>
      {
         suggestions.length === 0 ? null : <div className='absolute transparent-lg ml-[28rem] w-[500px] p-2 shadow-lg bg-gray-50'>
         <ul>
           {
             suggestions.map((elem)=>{
               return(
                <Link to={'/feed/'+elem}> <li className='hover:bg-zinc-200'>{elem}</li></Link>
               )
             })
           }
         </ul>
   </div>
        
      }
    </>
  )
}
export default Header