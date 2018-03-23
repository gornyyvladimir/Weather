import React, { Fragment } from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';

const WeatherPage = props => (
      <Fragment>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather}/>}
      </Fragment>
);

export default WeatherPage;