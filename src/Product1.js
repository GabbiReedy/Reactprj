import React, { useEffect } from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './Product1.css'
import india from './images/India.png'
import cash from './images/Cash.png'
import replace from './images/replace.png'
export default function Product1(){
const [state, setState]=useState([])
const[search,setSearch]=useState("")
  const handler=(e)=>{
    setSearch(e.target.value)
  }
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setState(json))
 
      return(
      <>
      
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 mt-3'>
            <h1 className='text-danger' id='prodh1'><b>Products</b></h1>
            <marquee direction='left' bgcolor='black'><h5 className='text-light'>GET FREE SHIPPING. GET 10% OFF ON PREPAID ORDERS. </h5></marquee>
            
          <input type='text' placeholder='search' value={search} style={{width:'100%'}} onChange={handler}/>
          </div>
          <div className='col-md-6'>
          <h3 id='prodh3'><img src={india} alt='' width='70px' />Made In India,
          for the World</h3>
          <h3 id='prodh3'><img src={cash} alt='' width='60px' />Cash On Delivery available</h3>
          </div>
          <div className='col-md-6'>
            <h3 id='prodh3'><img src={replace} alt='' width='70px' />7 days hassle-free return</h3>
            
          </div>
        </div>
    <div className='row'>
 
    {state.filter((x)=>x.title.includes(search)).map((item)=>
    <div className='col-md-4'>
    <div className="card" id='prodcard'>
  <img src={item.image} style={{width:'300px',height:'350px',margin:'auto'}} />
  <div className="card-body">
    <hr/>
    <h6 className="card-title" id='prodhead'>{item.title}</h6>
    <button className='btn btn-success'>{item.rating.rate}<span className='m-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='20px'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>| {item.rating.count}</button>
    <h6>$ {item.price}</h6>
    <button className="btn btn-outline-primary" onClick={handler}>{item.category}</button>
  </div>
  </div>
</div>
    )}
  </div>
</div>
</>
      )
}