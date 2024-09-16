import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './Home.css'
import pic1 from './images/Media.jpg'
import pic2 from './images/Hello.png'
import pic3 from './images/products.jpg'
import pic4 from './images/movies.jpg'
import pic5 from './images/News.png'
import pic6 from './images/Food.jpg'
import { Link } from 'react-router-dom'
import pic11 from './images/Weather1.jpg'
import pic22 from './images/Food1.png'
import pic33 from './images/products1.jpg'

export default function Home() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'> 
        <div className='col-md-12'>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic5} className="d-block w-100" height='280px' alt="..." />
    </div>
    <div className="carousel-item active">
      <img src={pic6} className="d-block w-100" height='280px' alt="..." />
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" height='280px' alt="..." />
    </div>
    <div className="carousel-item">x
      <img src={pic4} className="d-block w-100" height='280px' alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>
<div className='container-fluid' id='home'>
  <div className='row p-5'>
    <div className='col-md-8'>
      <h1>Hii <img src={pic2} alt='' width='45px' height='45px' /> ,</h1>
      <h2><i>I'M</i> <b className='text-danger'>Mounika</b> <br/>
      <span><i>Front-End Developer</i></span></h2>
      <br/>
      <p id='homep'>I design and develop expecirnces that make pepole's lives<br/>
      simpler through Web and Mobile apps.I work with Figma,<br/>
      <b>HTML5, CSS3, JavaScript, React, ReactNative, Fluter.</b>
      </p>
    </div>
    <div className='col-md-4'>
      <img src={pic1} alt='' className='shadow-lg p-3 mb-5' id='homeimg'/>
    </div>
  </div>
  <div className='row'>
    <div className='col-md-4' id='homecard'>
    <div className="card bg-dark">
  <img src={pic11} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text text-white"><b>Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover.</b></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark text-white">Temp</li>
    <li className="list-group-item bg-dark text-white">Humidity</li>
    <li className="list-group-item bg-dark text-white">Rainy</li>
  </ul>
  <div className="card-body">
    <Link to='/Weather' className="card-link">Weather</Link>
  </div>
</div>
    </div>

    <div className='col-md-4' id='homecard'>
    <div className="card bg-dark">
  <img src={pic22} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text text-white"><b>Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body</b></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark text-white">Chicken</li>
    <li className="list-group-item bg-dark text-white">Burger</li>
    <li className="list-group-item bg-dark text-white">Fish Fry</li>
  </ul>
  <div className="card-body">
    <Link to='/Food' className="card-link">Food</Link>
  </div>
</div>
    </div>

    <div className='col-md-4' id='homecard'>
    <div className="card bg-dark">
  <img src={pic33} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text text-white"><b>A product is any item or service you sell to serve a customer's need or want. Products can be physical or virtual. Physical products include durable goods </b></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark text-white">Women</li>
    <li className="list-group-item bg-dark text-white">Men</li>
    <li className="list-group-item bg-dark text-white">Gadgets</li>
  </ul>
  <div className="card-body">
    <Link to='/Product' className="card-link">Product</Link>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  )
}
