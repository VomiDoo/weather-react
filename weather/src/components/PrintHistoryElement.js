export function HistoryElement (item) {
        return (<li className="history__li">
        <p className="history__name border">{item.location}</p>
        <p className="history__temperature border">{item.temperature}</p>
        <p className="history__weather border">{<img src={item.icon} className="history__weather-icon" alt='weather'></img>}</p>
        <p className="history__wind border">{item.windSpeed} km/s {item.windDir}</p>
        </li>
          )
}