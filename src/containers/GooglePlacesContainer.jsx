import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import GooglePlaces from '../components/WeatherPage/GooglePlaces';

class GooglePlacesContainer extends Component {
  state = {
    value: '',
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    const { lat, lng } = await getLatLng(results[0]);
    this.props.onAddressChange(lat, lng);
    const addressArr = address.split(', ');
    this.props.setLocation(addressArr[0], addressArr[addressArr.length - 1]);
    console.log(address);
  }

  render() {
    const searchOptions = {
      types: ['(cities)'],
    };
    return (
      <GooglePlaces
        value={this.state.value}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      />
    );
  }
}

GooglePlacesContainer.propTypes = {
  onAddressChange: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default GooglePlacesContainer;
