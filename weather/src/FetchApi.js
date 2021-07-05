import { PrintWeather } from './PrintWeather';
import React, { useState } from "react";

// const test = /[0-9]/g;
// const _ = require('lodash');

export function FetchAPI (city, town, setTown) {


    const getHistoryObject = (data) => {
        const icon = data.current.weather_icons[0];
        
        return {
          location: `${data.location.country}, ${data.location.region}`,
          temperature: data.current.temperature,
          windDir: data.current.wind_dir,
          windSpeed: data.current.wind_speed,
          icon,
          time: data.location.localtime.slice(11, 16),
          pressure: data.current.pressure,
          feelslike: data.current.feelslike,
          discription: data.current.weather_descriptions,
        }
      };


    fetch(
        `http://api.weatherstack.com/current?access_key=84066850fc1e43ed030cad6188057260&query=${city || 'Minsk'}`
    )
        .then((data) => data.json())
        .then((data) => {
            
         let a = getHistoryObject(data)
         setTown(a)
        })
        // .then (town => {
        //     PrintWeather(town)
        // })
        
        let b = PrintWeather(town);
        return b;
};
