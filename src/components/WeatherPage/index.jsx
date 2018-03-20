import React from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';

const WeatherPage = props => {

  return(
      <div>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather}/>}
      </div>
  );
};

export default WeatherPage;