import React from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';

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
        <input type="text" onChange={onChange} />
        <div>
          <WheatherCover image={image} hasError={hasError}/>
        </div>
      </div>
  );
};

export default WeatherPage;