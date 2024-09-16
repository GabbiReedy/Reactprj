import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic from './images/Logo.jpg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/' style={{marginRight:"550px"}}><img src={pic} alt="" width='75px' height='50px' style={{borderRadius:'15px'}}/></Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ml-50">
          <Link className="nav-link text-white" to='/Contact'><strong style={{fontSize:'20px', marginRight:'20px'}}>Contact</strong></Link>
        </li>
        <li className="nav-item ml-50">
          <Link className="nav-link text-white" aria-disabled="true" to='/CheckBMI'><strong style={{fontSize:'20px', marginRight:'20px'}}>CheckBMI</strong></Link>
        </li>
        <li className="nav-item dropdown ml-50">
          <a className="nav-link active dropdown-toggle text-white" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'20px', marginRight:'20px'}}>
          <strong>API</strong>
          </a>
          <ul className="dropdown-menu bg-success">
            <li><Link className="dropdown-item text-warning" to='/Product'><b>Product</b></Link></li>
            <li><Link className="dropdown-item text-warning" to='/Food'><b>Food recipe</b></Link></li>
            <li><Link className="dropdown-item text-warning" to='/Weather'><b>Weather</b></Link></li>
            <li><Link className="dropdown-item text-warning" to='/Movie'><b>Movie</b></Link></li>
            <li><Link className="dropdown-item text-warning" to='/News'><b>News</b></Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
