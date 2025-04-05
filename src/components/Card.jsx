import React from 'react'
import {FcLike ,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'



const Card = ({id,image,title,description,likedCourse,setLikedCourse,course}) => {

  //like unlike ka function aur logic

  function clickHandler(){
    if(likedCourse.includes(course.id)){
      setLikedCourse((prev)=>prev.filter((cid)=>cid !==course.id))
      alert('Do you want to remove like')
      toast.warning('like removed')
    }else{
      if(likedCourse.length===0){
        setLikedCourse([course.id])
      }else{
        setLikedCourse((prev)=>[...prev,course.id])
        
      }
      
      toast.success('Liked successfully')
    }
  }
  
  return (
    <div className='card'>

      <img className='image' src={image} alt="" />

      <div className='heart'>
       <button onClick={clickHandler}>
        {likedCourse.includes(course.id)? <FcLike /> : <FcLikePlaceholder />}
       </button>

      </div>
      <div className='card-content'>
          <h1 className='card-head'>{title}</h1>
          <p className='card-para'>{description}</p>
        </div>



      
    </div>
  )
}

export default Card
