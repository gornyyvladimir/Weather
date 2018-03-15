import React from 'react';
import WheatherWeek from './WheatherWeek';

const WeatherPage = ({weekWeather, city, hasError, onChange, country}) => {

  return(
      <div>
        {
          hasError ? <p>Error</p> : 
          <div>
            {`${city}, ${country ? country : ''}`}
            {weekWeather && <WheatherWeek weekWeather={weekWeather}/>}
          </div>
        }
        <input type="text" onChange={onChange} />
      </div>
  );
};

export default WeatherPage;