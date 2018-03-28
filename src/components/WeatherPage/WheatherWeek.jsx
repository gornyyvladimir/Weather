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

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  cursor: pointer;

  &:first-child::after {
    content: '';
    position: absolute;
    top: 35px;
    left: 15px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 4px;
    border-top-width: 4px;
    border-left: 4px solid #192a56;
  }
`;

const WheatherWeek = ({ weekWeather, onClick }) => (
  <UnstyledList>
  {
    weekWeather && weekWeather.map((item, key) => (
      <Item key={key} onClick={onClick(key)}>
        <WheatherItem 
          day={getDay(item.dt*1000)} 
          temp={item.temp.day}
          weather={item.weather}
        />
      </Item>
    ))
  }
  </UnstyledList>
);

export default WheatherWeek;