import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Bar from "./Bar";
import { GOOGLE_API_KEY } from "../utils/constants";
import {Link} from 'react-router-dom'

const Topic = ()=>{
  const [arr,setArr] = useState([]);
  //console.log(arr);
  const {topic} = useParams();
  //console.log(topic);
  useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
    const data = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q='+topic+'&type=video&key='+GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json.items);
    setArr(json.items);
  }
  return(
    <>
    <div className='p-8'>
      {arr.map((elem)=>{
        return(
          <Link to={'/watch?v='+elem.id.videoId}><Bar data={elem}/></Link>
        )
      })}
    </div>
    </>
  )
}
export default Topic