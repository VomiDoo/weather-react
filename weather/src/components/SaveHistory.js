const _ = require('lodash')

export function saveHistory (history, setHistory, weather) {
    history.unshift(weather);
    
	setHistory(_.take(history, 5));
    setHistory(_.uniqBy(history, (e) => e.location));
	localStorage.setItem('history', JSON.stringify(history));
  };