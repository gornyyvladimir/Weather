import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';
import WheatherCard from './WheatherCard';

const WeatherPage = props => (
  <Fragment>
    <WheatherCover {...props} />
    {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather} onClick={props.onClick} />}
    {props.itemId != null && <WheatherCard {...props} />}
  </Fragment>
);

WeatherPage.propTypes = {
  weekWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  itemId: PropTypes.number,
};

WeatherPage.defaultProps = {
  itemId: null,
};

export default WeatherPage;
