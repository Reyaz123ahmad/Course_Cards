import React, { useState } from 'react'
import Card from './Card'


const Cards = ({course,category}) => {
  const [likedCourse,setLikedCourse]=useState([]); // like unlike button ke liye state variable
  let filteredCourses;
  if(category==='All'){
    filteredCourses=course;
  }else{
    filteredCourses=course.filter(course1=>course1.category===category)
  }
  return (
    <div className='cards'>
      {
         filteredCourses.map((course)=>{
          return <Card {...course} key={course.id} likedCourse={likedCourse} setLikedCourse={setLikedCourse} course={course}></Card>
      })
        
      }
    </div>
  )
}

export default Cards
