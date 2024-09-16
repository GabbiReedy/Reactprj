import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Movie.css'
 
export default function Movie() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetchDefaultMovies();
  }, []);
 
  const fetchDefaultMovies = () => {
    fetch(`http://www.omdbapi.com/?s=new&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  };
 
  return (
      <div className="container-fluid" id='moive'>
        <h1 className="text-center" id='mov1'><b>Search for Your Favorite Movie</b></h1>
        <form onSubmit={submitHandler} className="mb-4">
          <div className="d-flex justify-content-center">
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Enter movie title...'
              className='form-control me-2'
              style={{ maxWidth: '600px', flex: '1' }}
            />
            <button type='submit' className='btn btn-outline-dark'>
              Search
            </button>
          </div>
        </form>
        <div className='row'>
          {data.map((movie) => (
            <div key={movie.imdbID} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
              <div className='card' id='mov4'>
                <img
                  src={movie.Poster}
                  className='card-img-top img-fluid'
                  alt={movie.Title}
                />
                <div className='card-body' id='mov2'>
                  <h5 className='card-title' id='mov3'>
                    <b>{movie.Title}</b>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}