const Bar = ({data})=>{
  const {snippet} = data;
  const {title,thumbnails,description} =snippet;
  return(
    <>
    <div className=' h-[150px] bg-zinc-200 rounded-lg mb-4 p-2 flex gap-4'>
      <img src={thumbnails.high.url} className='w-[220px] h-[140px]'/>
     <div>
      <h2 className='font-bold'>{title}</h2>
      <p>{description}</p>
     </div>
    </div>
    </>
  )
}
export default Bar