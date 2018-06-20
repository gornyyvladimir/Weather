const weather = (apiWeather) => {
  switch (apiWeather) {
    case 'Drizzle': return 'Rain';
    case 'Atmosphere': return 'Fog';
    case 'Clear': return 'Sunny';
    case 'Extreme': return 'Tornado';
    case 'Additional': return 'Wind';
    default: return apiWeather;
  }
};

export default weather;
