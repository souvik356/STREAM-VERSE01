import Button from "./Button";
import {Link} from 'react-router-dom'
const BtnList =()=>{
  const btnArray = ['All','Music','Sports','Stock-Market','Jazz','News','Free music','kaavish','Adele','lo-fi','Science','Fiction'];
  return(
    <>
     <div className='w-[100%] flex gap-7 p-2 '>
       {
         btnArray.map((elem,id)=>{
           return(
           <Button data={elem}/>
           )
         })
       }
     </div>
    </>
  )
}
export default BtnList