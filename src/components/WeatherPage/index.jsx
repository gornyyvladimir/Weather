import React from 'react';
import WheatherWeek from './WheatherWeek';

const WeatherPage = ({weekWeather, city, hasError, onChange, country, image}) => {

  return(
      <div>
        {
          hasError ? <p>Error</p> : 
          <div>
            {`${city}, ${country ? country : ''}`}
            {weekWeather && <WheatherWeek weekWeather={weekWeather}/>}
          </div>
        }
        <div>
          {image && <img src={ image.urls.regular } alt="snow"/>}
        </div>
        <input type="text" onChange={onChange} />
      </div>
  );
};

export default WeatherPage;