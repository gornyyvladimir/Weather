import React, { Component } from 'react';
import GooglePlaces from '../components/WeatherPage/GooglePlaces';

class GooglePlacesContainer extends Component {
  state = {
    value: '',
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <GooglePlaces value={this.state.value} onChange={this.handleChange} onSelect={() => {}} />
    );
  }
}

export default GooglePlacesContainer;
