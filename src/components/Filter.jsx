import React from 'react'


const Filter = ({filterData,category,setCategory}) => {
  const filterHandler=(title)=>{
    setCategory(title)
  }
  
  return (
    <div className='filter'>
        {
            filterData.map((data) => (
                <button className='filter-btn' key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>
                // {`filter-btn ${category===data.title?'active':''}`}
            ))
        }
       
    </div>
  )
}

export default Filter