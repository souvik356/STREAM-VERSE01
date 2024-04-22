import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchInfo from "./WatchInfo";
import Comment from "./Comment";
import SuggestionCard from "./SuggestionCard";
import {Link} from 'react-router-dom'
import {GOOGLE_API_KEY} from '../utils/constants'

const WatchPage = ()=>{
  const [detail,setDetails] = useState([]);
  const [statistics,setStatistics] = useState([]);
  const [comment,setComment] = useState([]);
  const [suggestions,setSuggestions] = useState([]);
  useEffect(()=>{
    dispatch(closeMenu());
    getData();
    getComment();
    getSuggestions();
  },[])
  const getData = async ()=>{
     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${search.get('v')}&key=${GOOGLE_API_KEY}`);
     const json = await data.json();
     console.log(json.items[0]);
     console.log(json.items[0].statistics);
     setDetails(json.items[0].snippet);
     setStatistics(json.items[0].statistics)
  }
  const getComment = async ()=>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${search.get('v')}&maxResults=20`);
    const json = await data.json();
    //console.log(json.items);
    setComment(json.items);
  }
    const getSuggestions = async ()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=tags[0]&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    console.log(json.items);
    setSuggestions(json.items);
  }
  const dispatch = useDispatch();
  const [search]= useSearchParams();
  //console.log(search.get('v'));
  return(
    <>
     <div className='flex gap-4'>
     <div className='p-6'>
        <iframe width="960" height="515" src={"https://www.youtube.com/embed/"+search.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe> 
       <WatchInfo info={detail} stats={statistics}/>
       <h1 className='font-bold text-lg'>Comment</h1>
       {
        comment.map((elem)=>{
          return(
            <Comment key={elem.id} info={elem}/>
          )
        })
      }
      </div>
      <div>
        {
          suggestions.map((elem)=>{
            return(
                  <Link to={'/watch?v='+elem.id.videoId}><SuggestionCard key={elem.id} info={elem}/></Link>
            )
          })
        }
     </div>
     </div>
    </>
  )
}
export default WatchPage