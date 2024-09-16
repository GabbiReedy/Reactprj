import React, { useState } from 'react'
import Data from './info.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Login.css'
import App from './App'
import pic from './images/google.png'
import login from './images/login.jpg'

export default function Login(){
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [loging, setLoging]=useState(false)
  const Updata1=(e)=>{
    setEmail(e.target.value);
  }
  const Updata2=(e)=>{
    setPassword(e.target.value);
  }
  const handler=()=>{
  Data.map((x)=>{
    if(x.Email==email){
  if(password==x.Password)
  {
    setLoging(true)
  }
  else{
    alert("invalid Data")
  }
}
})
  }
  if(loging){
    return(
      <>
      <App/>
      </>
    )
  }
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-7'>
          <img src={login} alt='' width='100%' height='100%' />
        </div>
        <div className='col-md-5'>
          <h4 id='loginh4'>Welcome Back !</h4>
          <h6>Enter to get unlimited access to Data & information</h6>
          <h5 id='loginh5'>Email</h5>
        <input type='text' placeholder='Username or email' id='loginin' onChange={Updata1} required />
      <br/>
      <h4 id='loginh5'>Password</h4>
      <input type='password' placeholder='Enter password' id='loginin' onChange={Updata2} required />
      <br/>
      <br/>
      <h6 id='loginh6'><a href=''>Forgot password?</a></h6>
      <button className='btn btn-outline-success' onClick={handler} id='loginbut'>Login</button>
      <h4 id='signh4'>or</h4>
     <h5 id='signh5'><img src={pic} alt='' width='20px' /> Sign up with Google</h5>
      <h6 id='loginh3'><b>Are you new? <a href='' style={{color:'green', textDecoration:'none'}}>Create an Account</a></b></h6>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          
        </div>
      </div>
    </div>
    </>
  )
}
