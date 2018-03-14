const API_KEY = "d94bcd435b62a031771c35633f9f310a"
const apiUrl = "http://api.openweathermap.org/data/2.5/"

const fetchWeather = function(city) {
  const weeklyWeatherUrl =
    `${apiUrl}/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`

  return fetch(weeklyWeatherUrl).then(response => {
    if(response.ok)
      return response.json();
    throw new Error('Network response was not ok.');
  });
}

export default fetchWeather;