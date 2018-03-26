import React, { Fragment } from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';
import WheatherCard from './WheatherCard';

const WeatherPage = props => (
      <Fragment>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather} onClick={props.onClick}/>}
        {props.card && <WheatherCard/>}        
      </Fragment>
);

export default WeatherPage;