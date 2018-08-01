import fetchWeather from '../services/weatherApi';

const weatherAdapter = async (lat, lon) => {
  const { data: { list: rawWeather } } = await fetchWeather(lat, lon);
  return rawWeather.map(dayOfWeek => ({
    datetime: dayOfWeek.dt,
    temperature: dayOfWeek.temp,
    pressure: dayOfWeek.pressure,
    humidity: dayOfWeek.humidity,
    description: dayOfWeek.weather[0].main,
    icon: dayOfWeek.weather[0].icon,
    speed: dayOfWeek.speed,
    direction: dayOfWeek.deg,
    clouds: dayOfWeek.clouds,
  }));
};
export default weatherAdapter;
