import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import weatherIcons from '../../helpers/icons';

const Day = styled.span`
  font-size: 18px;
  color: ${props => props.theme.primary};
  margin-right: auto;
  ${breakpoint('tablet')`
    margin: 0;
  `}
`;

const Temperature = styled.span`
  text-align: right;
  font-size: 18px;
  color: ${props => props.theme.primary};
  width: 60px;
  ${breakpoint('tablet')`
    width: auto;
  `}
`;

const WheatherItem = ({ day, temp, weather }) => (
  <Fragment>
    <Day>{day}</Day>
    <img src={weatherIcons[weather[0].icon]} alt="snow" />
    <Temperature>{Math.floor(temp)}° C</Temperature>
  </Fragment>
);

WheatherItem.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WheatherItem;
