import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import getDay from '../../helpers/date';
import WheatherItem from './WheatherItem';

const UnstyledList = styled.ul`
  padding: 0;
  margin: 0;
  background-color: white;
  li {
    list-style: none;
  }
  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-around;
  `}
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
    border-left: 4px solid ${props => props.theme.primary};
    ${breakpoint('tablet')`
      display: none;
    `}
  }

  ${breakpoint('tablet')`
    padding: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
  `}

`;

const WheatherWeek = ({ weekWeather, onClick }) => (
  <UnstyledList>
    {
      weekWeather && weekWeather.map((item, key) => (
        <Item key={key} onClick={onClick(key)}>
          <WheatherItem
            day={getDay(item.dt * 1000)}
            temp={item.temp.day}
            weather={item.weather}
          />
        </Item>
      ))
    }
  </UnstyledList>
);

WheatherWeek.propTypes = {
  weekWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WheatherWeek;
