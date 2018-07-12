import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GooglePlaces from '../components/WeatherPage/GooglePlaces';

class GooglePlacesContainer extends Component {
  state = {
    value: '',
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  handleSelect = (address) => {
    this.props.onAddressChange(address);
  }

  render() {
    return (
      <GooglePlaces
        value={this.state.value}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      />
    );
  }
}

GooglePlacesContainer.propTypes = {
  onAddressChange: PropTypes.func.isRequired,
};

export default GooglePlacesContainer;
