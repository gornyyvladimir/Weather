import React, { Fragment } from 'react';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';
import WheatherCard from './WheatherCard';

const WeatherPage = props => (
      <Fragment>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather} onClick={props.onClick}/>}
        {props.itemId != null && <WheatherCard {...props}/>}
      </Fragment>
);

export default WeatherPage;