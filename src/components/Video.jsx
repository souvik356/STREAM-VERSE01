const Video = ({data})=>{
  const {snippet,statistics} = data;
  const {title,channelTitle} = snippet;
  return(
    <>
      <div className='w-[300px] shadow-2xl rounded-xl overflow-hidden p-1.5'>
        <img src={snippet.thumbnails.high.url} className='w-full h-[190px] overflow-hidden rounded-lg'/>
        <h4>{title}</h4>
        <h6>{channelTitle}</h6>
        <div className='flex gap-6'>
        <h6>{statistics.viewCount}</h6>
        <h6>2 days ago</h6>
        </div>
      </div>
    </>
  )
}
export default Video