import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import CheckBMI from './CheckBMI'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Weather from './Weather'
import Product from './Product'
import Food from './Food'
import Movie from './Movie'
import News from './News'

export default function App() {
  return (
    <>

     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/CheckBMI' element={<CheckBMI/>}></Route>
      <Route path='/Weather' element={<Weather/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Food' element={<Food/>}></Route>
      <Route path='/Movie' element={<Movie/>}></Route>
      <Route path='/News' element={<News/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
