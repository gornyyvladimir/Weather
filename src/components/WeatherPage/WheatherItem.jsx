import React, { Fragment } from 'react';
import styled from 'styled-components';
import weatherIcons from '../../helpers/icons';

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