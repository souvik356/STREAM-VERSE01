import { useEffect, useState } from "react"
import { URL } from "../utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = ()=>{
  const [video,setVideo] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async ()=>{
    const data = await fetch(URL);
    const json = await data.json();
    console.log(json.items);
    setVideo(json.items);
  }
  if (video.length === 0){
    return <Shimmer/>
  }
  return(
    <>
     <div className='flex gap-4 mt-3 ml-6 flex-wrap'>
     {
       video.map((elem,index)=>{
         return(
           <Link key={elem.id} to={'/watch?v='+elem.id}><Video data={elem}/></Link>
         )
       })
     }
     </div>
    </>
  )
}
export default VideoContainer