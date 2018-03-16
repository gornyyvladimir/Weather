import React from 'react';
import getDay from '../../helpers/date';
import WheatherItem from './WheatherItem';

const WheatherWeek = ({ weekWeather }) => (
  <ul>
  {
    weekWeather && weekWeather.map((item, key) => (
      <li key={key}>
        <WheatherItem 
          day={getDay(item.dayWeather.dt*1000)} 
          temp={item.dayWeather.temp.day}
        />
      </li>
    ))
  }
  </ul>
);

export default WheatherWeek;