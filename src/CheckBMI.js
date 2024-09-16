import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './CheckBMI.css'
import pic from './images/BMI.png'
 
export default function CheckBMI() {
  const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
 
  const updateWeight = (e) => {
    setWeight(e.target.value);
  };
 
  const updateHeight = (e) => {
    setHeight(e.target.value);
  };
 
  const calculateBMI = () => {
    if (weight !== "" && height !== "") {
      let bmiValue = (weight * 10000) / (height * height);
      setBmi(bmiValue.toFixed(1)); // Round to one decimal place
    }
  };
 
  // Determine BMI category based on the value
  const getBMICategory = () => {
    if (bmi === "") {
      return ""; // No BMI calculated yet
    } else if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else if(bmi <=30 && bmi>=40){
      return "Obesity";
    }else{
      return "Extreme Obesity"
    }
  };
 
  // Determine CSS class based on BMI category
  const getBMIClass = () => {
    const category = getBMICategory();
    switch (category) {
      case "Underweight":
        return "text-yellowgreen";
      case "Normal":
        return "text-green";
      case "Overweight":
        return "text-yellow";
      case "Obesity":
        return "text-red";
      default:
        return "";
    }
  };
 
  return (
    <>
    <div className='container-fluid' id='con'>
      <div className='row'>
        <div className='col-md-4'>
          
        </div>
        <div className='col-md-4' id='bmi'>
          <h2 id='h2'>Body Mass Index</h2>
          <input type='text' placeholder='Enter Your Weight' id='in' onChange={updateWeight} />
          <br />
          <br />
          <input type='text' placeholder='Enter Your Height' id='in' onChange={updateHeight} />
          <br />
          <br />
          <button onClick={calculateBMI} className='btn btn-light m-3'>BMI</button>
          </div>
              
        <div className='col-md-4'>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4' id='bmi1'>
        <h5 id='h1'>YOUR BMI is</h5>
              <h1 className={bmi !== "" && (getBMIClass())} id='rel'>{bmi} kg/m<sup>2</sup></h1>
              <p className={bmi !== "" && (getBMIClass())} id='val'>({getBMICategory()})</p>
        </div>
        <div className='col-md-4'>

        </div>
      </div>
      <div className='row p-3'>
        <div className='col-md-12'>
        <img src={pic} alt='' id='img' />
        </div>
      </div>
    </div>
    </>
  );
}