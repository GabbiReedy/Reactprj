import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './News.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function News() {
  const [state, setState]=useState([])
  const [search, setSearch]=useState('')
  const handler=(e)=>{
    setSearch(e.target.value)
  }
  const Submit=()=>{
    axios.get(`https://newsdata.io/api/1/latest?apikey=pub_48205f4fe927256206346a5098a9186e4b689&q=${search}&language=en`)
            .then((res)=>{
        //  console.log(res)
        //   console.log(res.data.results)
         setState(res.data.results)
 
         
        }
            )}
      return(
   
   <>
   <div className='container-fluid' id='newmain'>
    <div className='row'>
      <div className='col-md-12'>
      <input type='text' placeholder='Enter news'  onChange={handler} /><br/>
      <button onClick={Submit}>Get Data</button>
      </div>
    </div>
    {state.map((x)=>
    <div className='row'>
      <div className='col-md-4'>
        <div className="card bg-black" id='newscard'>
        <h3 className="card-title" id='newshead'><b><h5><i>{x.title}</i> <br/> - <span className='text-danger'>{x.country}</span></h5></b></h3>
  <img src={x.image_url} className="card-img-top" alt="..." />
  </div>
  </div>
  <div className='col-md-4' id='newscol'>
  <div className="card-body">
    <img src={x.source_icon} alt='' width='50px' height='50px'/>
    <p className="card-text" style={{color:'darkblue', fontFamily:'revert-layer'}}>{x.ai_tag}, {x.sentiment}, {x.sentiment_stats}, {x.ai_region}</p>
    <h4 className="card-text text-black-emphasis"><small style={{}}>-{x.category}</small></h4>
  </div>
  </div>
  <div className='col-md-4'>
    <h4 className='text-dark text-center'>{x.keywords}<hr/></h4>
    <h5>{x.title}</h5>
  </div>
  </div>
)}
     </div>

    </>
      )
    }