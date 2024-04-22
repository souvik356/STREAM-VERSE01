const Comment = ({info})=>{
  const {snippet} = info;
  const {topLevelComment} = snippet
  return(
  <>
   <div className='mt-2 mb-2 bg-zinc-200 p-2 w-[60rem] rounded-xl'>
     <div className='flex gap-4'>
     <img className='w-8 h-8 rounded-[50%]' src={topLevelComment.snippet.authorProfileImageUrl}/>
     <h1 className='font-bold'>{topLevelComment.snippet.authorDisplayName}</h1>
     </div>
     <p className='mt-2 mb-2'>{topLevelComment.snippet.textDisplay}</p>
     <button className='p-1.5 bg-zinc-400 rounded-lg mr-10'>👍{topLevelComment.snippet.likeCount}</button>
     <button className='p-1.5 bg-zinc-400 rounded-lg mr-10'>👎</button>
     <button>Reply</button>
   </div>
  </>
  )
}
export  default Comment