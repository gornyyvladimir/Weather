import React, { Component } from 'react';
import { debounce } from 'lodash';
import { fetchWeather, fetchImage }  from "../services/api"
import WeatherPage from '../components/WeatherPage'

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Kazan",
      hasError: false
    };

    this.getWeatherDebounced = debounce(this.getWeather, 1000);
  }

  componentDidMount() {
    this.getWeather();
    this.getImage('snowfall');
  }

  async getWeather(searchedCity = this.state.city) {
    try {
      const response = await fetchWeather(searchedCity);
      const weekWeather = response.data.list.map(dayWeather => ({ dayWeather }));

      this.setState({
        weekWeather,
        city: searchedCity,
        country: response.data.city.country,
        hasError: false
      });
    }
    catch(error) {
      this.setState({hasError: true});
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

  async getImage(searchedImage = null, orientation = 'landscape') {
    try {
      const response = await fetchImage(searchedImage, orientation);
      this.setState({
        image: response.data
      });
      console.log(response.data);
    }
    catch(error) {
      this.setState({hasError: true});
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

  handleChange = e => {
    this.getWeatherDebounced(e.target.value);
  }

  render() {
    return <WeatherPage {...this.state} onChange={this.handleChange}/>
  }
}

export default WeatherContainer;