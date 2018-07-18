import axios from 'axios';

export const WEATHER_API_KEY = 'd94bcd435b62a031771c35633f9f310a';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

const fetchWeather = (lat, lon) =>
  axios.get(`${WEATHER_API_URL}/forecast/daily`, {
    params: {
      lat,
      lon,
      units: 'metric',
      cnt: 7,
      appid: WEATHER_API_KEY,
    },
  });

export default fetchWeather;
