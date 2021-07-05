import React, { useState } from "react";
import { FetchAPI } from './FetchApi';
import { PrintWeather } from "./PrintWeather";
import './App.css';


function App() {
  const [ city, setCity ] = useState('')
  const [ value, setValue ] = useState('')
  const [ history, setHistory ] = useState([])
  const [town, setTown ] = useState({})

  function changeHandler ({target}) {
    setValue(target.value)
  };

  function clickHandler () {
    setCity(value)
    setHistory([...history, {value}])
    
  };

  function handleKeyPress (event) {
    if(event.key === 'Enter'){
      clickHandler()
    }
  };

  return (
    <>
      <div className="wrap wrap--bg">
          <header className="header">
            <div>
                <button className="my-weather__btn btn"> My Weather</button>
                <button className="open-history-btn btn">History</button>
                <input className="header__input--country header__input" placeholder="Enter your country"></input>
                <input className="header__input--city header__input" placeholder="Enter your city" onChange = {changeHandler} onKeyPress = {handleKeyPress}></input>
                <button className="header__btn btn" onClick = {() => {clickHandler()}}>Find</button>
                <button className="clear-local-btn btn">Clear</button>

            </div>
          </header>
          <div>{FetchAPI('minsk', town, setTown)}</div>
      </div>
    </>
  )
}

export default App;
