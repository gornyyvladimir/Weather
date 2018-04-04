import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WheatherWeek from './WheatherWeek';
import WheatherCover from './WheatherCover';
import WheatherCard from './WheatherCard';

const WeatherPage = props => (
      <Fragment>
        <WheatherCover {...props}/>
        {props.weekWeather && <WheatherWeek weekWeather={props.weekWeather} onClick={props.onClick}/>}
        {props.itemId != null && <WheatherCard {...props}/>}
      </Fragment>
);

WeatherPage.propTypes = {
  inputValue: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  itemId: PropTypes.number
};

WeatherPage.defaultProps = {
  itemId: null
}

export default WeatherPage;