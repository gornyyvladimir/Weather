import React from 'react';
import WheatherWeek from './WheatherWeek';

const WeatherPage = ({weekWeather, city, hasError, onChange, country, image}) => {

  const renderImage = () => {
    if(hasError) {
      return;
    }
    else if(!image) {
      return <p>Loading ...</p>
    }
    else {
      return <img src={ image.urls.regular } alt="snow"/>;
    }
  };

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
          {renderImage()}
        </div>
      </div>
  );
};

export default WeatherPage;