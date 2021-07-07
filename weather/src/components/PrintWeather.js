import React from 'react';

export function PrintWeather (city) {
    return (
        <div className='main'>
            <h2 className="main__title">{city.location}</h2>
            <p className="main__day"></p>
            <h3 className="main__temperature">{city.temperature} {'\u2103'}</h3>
            <div className="main__img" style = {{backgroundImage: `url(${city.icon})`}}></div>
            <div className="main__body">
                <div className="main__box">
                    <p className="inform__time">{`Time: ${city.time}`}</p>
                    <p className="inform__pressure">{`Pressure: ${city.pressure} MB`}</p>
                </div>
                <div className="main__box">
                    <p className="inform__feelslike">{`Feels like: ${city.feelslike}`} {'\u2103'}</p>
                    <p className="inform__weather">{`Today is ${city.discription}`}</p>
                </div>
                <div className="main__box">
                    <p className="wind-direction">{`Wind: ${city.windDir}`}</p>
                    <p className="wind-speed">{`Speed: ${city.windSpeed} km/h`}</p>
                </div>
            </div>
        </div>
    )
}