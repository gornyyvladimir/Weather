const isUnsplash = url =>  url.toLowerCase().indexOf('unsplash') > -1;
const isOpenWeatherMap = url =>  url.toLowerCase().indexOf('openweathermap') > -1;

export { isUnsplash, isOpenWeatherMap };
