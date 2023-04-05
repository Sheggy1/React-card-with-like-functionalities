import React ,{ useState } from 'react'
import Title from './Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from "react-icons/ai"
import Dogy from '../img/doge.png' 

export default function LikePhotoApp() {


  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if(!like) {
      setLike(true)
      setCount(like + 1)
    } else {
      setLike(false)
      setCount(like - 1)
    }
  };
  
  return (
    <div className='container text-center'>
        <Title text={"Like Photo App"} />
        <Title classes={"subtitle"} text={`likes ${count}`} />
        <div 
            className='card card-dark m-auto shadow-sm' 
            style={{width: 300 , cursor: 'pointer'}} 
        >
          <div className='card-header fs-xl'>
            <AiFillSmile className="mr-2 "/>
            <small>Dogy</small>
          </div>
          <img 
            src={Dogy} 
            alt='img' 
            style={{height: "fit-content"}}
            onDoubleClick={toggleLike}
          />
            
          <div 
            className='card-footer fs-xl d-flex' 
            style={{justifyContent: "space-between"}}
          >
            <AiOutlineComment /> {''}
            {like ? 
              (<AiFillHeart className='text-danger' onClick={toggleLike}/>
            ) : (
              <AiOutlineHeart onClick={toggleLike}/>
            )}
          </div>
        </div> 
    </div>
  )
}
