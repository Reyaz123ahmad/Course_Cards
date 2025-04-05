import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { filterData,content } from './data'
import Spinner from './components/Spinner'
import './App.css'



const App = () => {
  const [course,setCourses]=useState(content);
  const [category,setCategory]=useState(filterData[0].title)
  // const filteredCourses=category==='All'?content:content.filter(course=>course.category===category);
  
  return (
    <div className='app'>
     
      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div>
        <Cards  course={course} category={category}/>
        {/* course={course} */}
      </div>

      <div>
        <Spinner/>
      </div>
    </div>
  )
}

export default App
