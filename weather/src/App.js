import React, { useState, useEffect } from "react";
import { getWeatherInform } from './components/WeatherInform';
import { PrintWeather } from "./components/PrintWeather";
import { GetCoords } from "./components/GetLocation";
import { History } from "./components/PrintHistory";
import { saveHistory } from "./components/SaveHistory";
import './App.css';



function App() {
  const [ city, setCity ] = useState('');
  const [ value, setValue ] = useState('');
  const [ history, setHistory ] = useState(JSON.parse(localStorage.getItem('history')) || []);
  const [ town, setTown ] = useState({});
  const [ openHistory, setOpenHistory ] = useState(false);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=3343cd980c81f01c734791fb70856681&query=${city || 'Minsk'}`
    )
      .then((data) => data.json())
      .then((data) => {
        let town = getWeatherInform(data);
        setTown(town);
        saveHistory(history, setHistory, town);
      })
  }, [city]);

  function changeHandler ({target}) {
    setValue(target.value)
  };

  function clickHandler () {
    setCity(value)
    setValue('')
  };

  function handleKeyPress (event) {
    if(event.key === 'Enter'){
      clickHandler()
    }
  };

  function locationHandler () {
    GetCoords(setCity)
  };

  function historyHandler () {
    setOpenHistory(!openHistory)
  };

  function clearHistory () {
    localStorage.removeItem('history');
  }


  return (
    <>
      <div className="wrap wrap--bg">
          <header className="header">
            <div>
                <button className="my-weather__btn btn" onClick= {() => {locationHandler()}}> My Weather</button>
                <button className="open-history-btn btn" onClick = {() => {historyHandler()}}>History</button>
                <input type="text" className="header__input--city header__input" placeholder="Enter your city" value = {value} onChange = {changeHandler} onKeyPress = {handleKeyPress}></input>
                <button className="header__btn btn" onClick = {() => {clickHandler()}}>Find</button>
                <button className="clear-local-btn btn" onClick={() => {clearHistory()}}>Clear</button>
            </div>
          </header>
          {PrintWeather(town)}
          {History(openHistory, historyHandler, history)}
      </div>
    </>
  )
}

export default App;