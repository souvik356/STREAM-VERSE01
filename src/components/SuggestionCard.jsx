const SuggestionCard = ({info})=>{
  const {snippet} = info;
  const {title,thumbnails,channelTitle} = snippet;
  return(
    <>
     <div className='w-[300px] h-[290px] mt-5 shadow-2xl p-2'>
       <img className='w-[290px] h-[150px]' src={thumbnails.high.url}/>
       <h1 className='font-bold'>{title}</h1>
       <h4 className='mt-4'>Channel name - {channelTitle}</h4>
     </div>
    </>
  )
}
export default SuggestionCard