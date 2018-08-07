import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, withTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import getDay from '../../helpers/date';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  ${breakpoint('tablet')`
    position: absolute;
    height: 100%;
  `}
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: white;
  animation-name: ${props => (props.animation ? `${fadeInUp}` : `${fadeOutDown}`)};
  animation-duration: 1s;
  animation-fill-mode: both;
  box-sizing: border-box;
  ${breakpoint('tablet')`
    border-radius: 5px;
  `}
`;

const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 0;
  padding: 0;
  border: 0;
  width: 2rem;
  height: 2rem;
  background: none;
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    width: 1px;
    height: 100%;
    background: black;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`;

const UnstyledList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 18px;
  color: ${props => props.theme.primary};
`;


const WheatherCard = (props) => {
  // data for chart
  const data = props.weekWeather.map(item => (
    {
      name: getDay(item.datetime * 1000),
      temp: item.temperature.day,
    }
  ));

  const dayWeather = props.weekWeather[props.itemId];

  return (
    <Container>
      <Card animation={props.animation}>
        <Close onClick={props.onClose} />
        <UnstyledList>
          <Item>
            <span>Night</span>
            <span>{dayWeather.temperature.night}° C</span>
          </Item>
          <Item>
            <span>Morning</span>
            <span>{dayWeather.temperature.morn}° C</span>
          </Item>
          <Item>
            <span>Day</span>
            <span>{dayWeather.temperature.day}° C</span>
          </Item>
          <Item>
            <span>Evening</span>
            <span>{dayWeather.temperature.eve}° C</span>
          </Item>
          <Item>
            <span>Min temperature</span>
            <span>{dayWeather.temperature.min}° C</span>
          </Item>
          <Item>
            <span>Max temperature</span>
            <span>{dayWeather.temperature.max}° C</span>
          </Item>
          <Item>
            <span>Cloudiness</span>
            <span>{dayWeather.clouds} %</span>
          </Item>
          <Item>
            <span>Humidity</span>
            <span>{dayWeather.humidity} %</span>
          </Item>
          <Item>
            <span>Pressure</span>
            <span>{dayWeather.pressure} hPa</span>
          </Item>
          <Item>
            <span>Wind speed</span>
            <span>{dayWeather.speed} meter/sec</span>
          </Item>
        </UnstyledList>
        <ResponsiveContainer width="100%" height="20%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="temp" stroke={props.theme.primary} />
            <Tooltip />
            <XAxis dataKey="name" hide />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

WheatherCard.propTypes = {
  weekWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemId: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.bool.isRequired,
};

export default withTheme(WheatherCard);
