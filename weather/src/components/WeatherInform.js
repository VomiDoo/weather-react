export const getWeatherInform = (data) => {
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
