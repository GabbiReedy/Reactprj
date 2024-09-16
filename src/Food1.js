import axios from 'axios'
import React, { useState } from 'react'

export default function Food() {
    var [search,setSearch]=useState("")
    var [state,setState]=useState([])
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res)=>{
        setState(res.data.categories)
    })
    function searchValue(e){
        setSearch(e.target.value)
    }
  return (
    <div>
      <input type='text' placeholder='Search Categories' onChange={searchValue} className='d-block mx-auto'/>
      <div className='row'>
      {state.filter(item=>item.strCategory.includes(search)).map((x)=>
      <div className='col-md-4'>
        <h3>{x.idCategory}</h3>
      <img src={x.strCategoryThumb} style={{height:"300px",width:"300px"}}/>
      <h3>{x.strCategory}</h3>
      </div>
    )}
    
    </div>
    </div>
  )
}
