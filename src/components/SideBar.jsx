import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CiHome } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdOutlineGirl } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
const SideBar = ()=>{
  const isMenuOpen =  useSelector(store => store.app.isMenuOpen)

  return !isMenuOpen?null:(
    <>
      <div className='shadow-2xl'>
        <div className='w-50 flex flex-col px-8 gap-4'>
         <h1 className='font-bold mt-4'>Explore</h1>
         <Link to='/'><div className='p-1.5 flex gap-2 items-center hover:bg-zinc-200 rounded-lg'><CiHome/> Home</div></Link>
         <Link to='/feed/Trending'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><FaFire /> Trending</div></Link>
         <Link to='/feed/shopping'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><CiShoppingCart /> Shopping</div></Link>
         <Link to='/feed/Music'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><CiMusicNote1 /> Music</div></Link>
         <Link to='/feed/Movies'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdLocalMovies /> Movies</div></Link>
         <Link to='/feed/Live'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdOutlineSettingsInputAntenna /> Live</div></Link>
         <Link to='/feed/Gaming'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdOutlineSportsEsports /> Gaming</div></Link>
         <Link to='/feed/News'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><FaRegNewspaper /> News</div></Link>
         <Link to='/feed/Sports'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdOutlineSportsBaseball /> Sports</div></Link>
         <Link to='/feed/Courses'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><FaBook /> Courses</div></Link>
         <Link to='/feed/Beauty'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdOutlineGirl /> Beauty</div></Link>
         <Link to='/feed/Podcast'><div className='p-1.5 rounded-lg flex gap-4 items-center hover:bg-zinc-200'><MdOutlinePodcasts /> Podcast</div></Link>
        </div>
      </div>
    </>
  )
} 
export default SideBar