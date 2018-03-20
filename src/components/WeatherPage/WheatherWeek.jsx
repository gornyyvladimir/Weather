import React from 'react';
import getDay from '../../helpers/date';
import WheatherItem from './WheatherItem';
import styled from 'styled-components';

const UnstyledList = styled.ul`
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
`;

const WheatherWeek = ({ weekWeather }) => (
  <UnstyledList>
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
  </UnstyledList>
);

export default WheatherWeek;