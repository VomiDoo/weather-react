export function HistoryElement ({location, temperature, icon, windSpeed, windDir}) {
        return (<li className="history__li">
        <p className="history__name border">{location}</p>
        <p className="history__temperature border">{temperature}</p>
        <p className="history__weather border">{<img src={icon} className="history__weather-icon" alt='weather'></img>}</p>
        <p className="history__wind border">{windSpeed} km/s {windDir}</p>
        </li>
          )
}