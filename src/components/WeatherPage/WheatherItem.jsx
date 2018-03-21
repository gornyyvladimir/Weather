import React, { Fragment } from 'react';
import styled from 'styled-components';
//icons
import clearDay from '../../static/01d.svg';
import clearNight from '../../static/01n.svg';
import fewCloudsDay from '../../static/02d.svg';
import fewCloudsNight from '../../static/02n.svg';
import scatteredClodusDay from '../../static/03d.svg';
import scatteredClodusNight from '../../static/03n.svg';
import brokenClouds from '../../static/04d.svg';
import showerRain from '../../static/09d.svg';
import rainDay from '../../static/10d.svg';
import rainNight from '../../static/10n.svg';
import thunderstorm from '../../static/11d.svg';
import snowDay from '../../static/13d.svg';
import snowNight from '../../static/13n.svg';
import mist from '../../static/50d.svg';

//icon id from openwheathermap : ouricon.svg
const weatherIcons = {
  "01d": clearDay,
  "01n": clearNight,
  "02d": fewCloudsDay,
  "02n": fewCloudsNight,
  "03d": scatteredClodusDay,
  "03n": scatteredClodusNight,
  "04d": brokenClouds,
  "09d": showerRain,
  "10d": rainDay,
  "10n": rainNight,
  "11d": thunderstorm,
  "13d": snowDay,
  "13n": snowNight,
  "50d": mist
};

const Day = styled.span`
  font-size: 18px;
  color: #192a56;
  margin-right: auto;
`;

const Temperature = styled.span`
  text-align: right;
  font-size: 18px;
  color: #192a56;
  width: 60px;
`;

const Icon = styled.img`
`;

const WheatherItem = ({ day, temp, weather }) => (
  <Fragment>
    <Day>{day}</Day>
    <Icon src={weatherIcons[weather[0].icon]} alt="snow"/>
    <Temperature>{Math.floor(temp)}° C</Temperature>
  </Fragment>
);

export default WheatherItem;