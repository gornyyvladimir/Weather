import axios from 'axios';

//openweathermap
const WEATHER_API_KEY = 'd94bcd435b62a031771c35633f9f310a';
const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';

//unsplash
const UNSPLASH_ACCESS_KEY = '26b7f4ae5d1b87f63fa766a4bd26a22f894a3fb1f034c66058b802bfa78bab0f';
const UNSPLASH_API_URL = 'https://api.unsplash.com';

const fetchWeather = async (city) => {
    return await axios.get(`${WEATHER_API_URL}/forecast/daily`, {
      params: {
        q: city,
        units: 'metric',
        cnt: 7,
        appid: WEATHER_API_KEY,
      }
    });
}

const fetchImage = async (query, orientation = null, featured = null) => {
  return await axios.get(`${UNSPLASH_API_URL}/photos/random`, {
    params: {
      query,
      orientation,
      featured,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
    }
  });

}

export { fetchWeather, fetchImage };