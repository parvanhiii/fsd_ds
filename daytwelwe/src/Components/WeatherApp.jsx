import React, { useState } from 'react'

const WeatherApp = () => {
    const [city,setcity]=useState();
    const [data,setweather]=useState();
    const fetchdata = () => {
        alert("Weather data");
    };
  return (
    <div>
        WeatherApp
        <input type="text"
        onChange={(e)=>{
            setcity(e.target.value);
        }}
        />
        <button onClick= {fetchdata}> fetch weather </button>
    </div>
  );
};

export default WeatherApp;