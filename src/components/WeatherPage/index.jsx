import React from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';

const WeatherPage = props => {

  return(
      <div>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather}/>}
        <input type="text" onChange={props.onChange} />
      </div>
  );
};

export default WeatherPage;