
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Weather.css'; // External CSS file for styling
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
 
export default function Weather (){
  const [weatherData, setWeatherData] = useState({});
  const [cloudsData, setCloudsData] = useState({});
  const [sysData, setSysData] = useState({});
  const [windData, setWindData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [location, setLocation] = useState('');
  const [cityname, setCityname] = useState([])
  const [other, setOther] = useState([])
  const [time,setTime] = useState()
  const updateWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setWeatherData(res.data.main);
        setCloudsData(res.data.clouds);
        setSysData(res.data.sys);
        setWindData(res.data.wind);
        setWeatherDesc(res.data.weather);
        setCityname(res.data.name);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };
  useEffect(() => {
    let timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearTimeout(timer)
  });
  const weatherIcons = weatherDesc.map((item) => (
    <img
      key={item.id}
      src={`http://openweathermap.org/img/w/${item.icon}.png`}
      alt={item.description}
    />
  ));
 
  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
 
  return (
  
    <div className="container-fluid" id="main">
      <div className="row">
        <div className="col-md-6">
          <h5 className="header"><span style={{color:"orange"}}>THE </span> <span style={{color:"white"}}>WEATHER </span><br/><span style={{color:"green"}}>FORECASTING</span></h5>
          {time}
        </div>
       
        <div className="col-md-6 date">
          <h5 className="header">DATE</h5>
          <h5>{formattedDate}</h5>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter your city"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-2">
          <button className="btn btn-light" id="getDataBtn" onClick={updateWeather}>
            Get Data
          </button>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center"><b>CURRENT WEATHER</b></h4>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-4">
          <h5>
            {cityname}, {sysData.country}
            <br />
            {formattedDate}
          </h5>
        </div>
        <div className="col-md-4">
          <h5>
             Temp
            <br />
            {Math.round(isNaN(weatherData.temp)?"":weatherData.temp-273.15)} <sup>o</sup>C
          </h5>
        </div>
        <div className="col-md-4">
          <h4>DESC</h4>
          {weatherDesc.map((item) => (
            <h5 key={item.id}>
              {item.description} {weatherIcons}
            </h5>
          ))}
        </div>
      </div>
 
      <div className="row p-3">
        <div className="col-md-12">
          <h4 className="text-center"><b>ALL CONDITIONS</b></h4>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-3">
          <h5>
            Temp
            <br />
            {Math.round(isNaN(weatherData.temp)?"":weatherData.temp-273.15)} <sup>o</sup>C
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Wind
            <br />
            {windData.speed} m/s
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Clouds
            <br />
            {cloudsData.all} %
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Humidity
            <br />
            {weatherData.humidity} %
          </h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h5>Other Details</h5>
          <h6>Pressure: {weatherData.pressure}</h6>
          <h6>Sea-level: {weatherData.sea_level}</h6>
          <h6>Ground-level: {weatherData.grnd_level}</h6>
        </div>
      </div>
    </div>
  )
}