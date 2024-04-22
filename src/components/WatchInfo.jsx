import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const WatchInfo = ({ info,stats }) => {
  const [isTruncated, setTruncated] = useState(true);
  const { title, description,channelTitle,thumbnails } = info || {}; // Adding a null check here
  const {likeCount} = stats;
  const handleToggle = () => {
    setTruncated(!isTruncated);
  };

  return (
    <>
      <div>
        <h1 className='text-lg font-bold mt-3 mb-3'>{title}</h1>
        <div className='flex items-center gap-5'>
          <h1 className='font-bold'>{channelTitle}</h1>
           <button className='p-1.5 bg-black text-white rounded-xl'>Subscribe</button>
           <button className=' flex items-center gap-2 p-1.5 bg-black text-white rounded-xl'><AiFillLike /> {likeCount}</button>
           <button className='flex items-center justify-center p-2.5 bg-black text-white rounded-xl'><AiFillDislike /></button>
           <button className='p-1.5 bg-black text-white rounded-xl'>Share</button>
           <button className='p-1.5 bg-black text-white rounded-xl'>Download</button>
           <span className='w-[50px] h-[50px] flex items-center justify-center bg-black text-white rounded-[50%]'>...</span>
        </div>
        <div className='w-[600px] mt-2 mb-2 bg-zinc-300 rounded-lg p-1.5'>
          {description && ( // Adding a null check here
            isTruncated ? (
              <p>{description.slice(0, 100)}.....</p>
            ) : (
              <p>{description}</p>
            )
          )}
          <button className='font-bold' onClick={handleToggle}>
            {isTruncated ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </div>
    </>
  );
};

export default WatchInfo;
