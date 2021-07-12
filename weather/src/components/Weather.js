import React from 'react';

export function Weather ({town}) {
    return (
        <div className='main'>
            <h2 className="main__title">{town.location}</h2>
            <p className="main__day"></p>
            <h3 className="main__temperature">{town.temperature} {'\u2103'}</h3>
            <div className="main__img" style = {{backgroundImage: `url(${town.icon})`}}></div>
            <div className="main__body">
                <div className="main__box">
                    <p className="inform__time">{`Time: ${town.time}`}</p>
                    <p className="inform__pressure">{`Pressure: ${town.pressure} MB`}</p>
                </div>
                <div className="main__box">
                    <p className="inform__feelslike">{`Feels like: ${town.feelslike}`} {'\u2103'}</p>
                    <p className="inform__weather">{`Today is ${town.discription}`}</p>
                </div>
                <div className="main__box">
                    <p className="wind-direction">{`Wind: ${town.windDir}`}</p>
                    <p className="wind-speed">{`Speed: ${town.windSpeed} km/h`}</p>
                </div>
            </div>
        </div>
    )
}