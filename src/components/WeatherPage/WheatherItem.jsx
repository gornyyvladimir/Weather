import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import weatherIcons from '../../helpers/icons';

const Day = styled.span`
  font-size: 18px;
  color: ${props => props.theme.primary};
  margin-right: auto;
`;

const Temperature = styled.span`
  text-align: right;
  font-size: 18px;
  color: ${props => props.theme.primary};
  width: 60px;
`;

const Icon = styled.img`
`;

const WheatherItem = ({ day, temp, weather }) => (
  <Fragment>
    <Day>{day}</Day>
    <Icon src={weatherIcons[weather[0].icon]} alt="snow" />
    <Temperature>{Math.floor(temp)}° C</Temperature>
  </Fragment>
);

WheatherItem.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WheatherItem;
