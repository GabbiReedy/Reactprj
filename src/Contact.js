import React, { useState } from 'react';
import './Contact.css'
 
export default function Contact(){
  const [state, setState] = useState({});
 
  const handler = (e) => {
    setState({ state, [e.target.name]: e.target.value });
  };
 
  const handler1 = (e) => {
   // e.preventDefault();
 
  };
 
  return (
   
    <div className="main" style={{ textAlign: 'center',paddingBottom:"155px",paddingTop:"20px" }} >
      <h2 style={{color:"white",fontSize:"30px"}}><span style={{color:"orange"}}>Cont</span>act <span style={{color:"green"}}>Us</span></h2>
      <h3><span style={{color:"orange"}}>Phone:</span><span style={{color:"white"}}> +91 9876543210</span></h3>
      <h3><span style={{color:"orange"}}>Email:</span><span style={{color:"white"}}> vitalvamseedharreddy@gmail.com</span></h3>
      <form style={{maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:"gray",margin:"auto" }} onSubmit={handler1}>
        <label style={{ display: 'block', color:"white" }}>Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your Name'
          value={state.name}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', }}
         
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your Email'
          value={state.email}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Message:</label>
        <textarea
          name="message"
          placeholder='Enter message here'
          value={state.message}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
         />
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Submit</button>
      </form>
    </div>
   
   
  )
}