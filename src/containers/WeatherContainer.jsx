import React, { Component } from 'react';
import { debounce } from 'lodash';
import fetchWeather from "../services/api"
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
  }

  async getWeather(searchedCity = this.state.city) {
    try {
      const data = await fetchWeather(searchedCity);
      const weekWeather = data.list.map(dayWeather => ({ dayWeather }));

      this.setState({
        weekWeather,
        city: searchedCity,
        country: data.city.country,
        hasError: false
      });
    }
    catch(error) {
      this.setState({hasError: true});
      console.log(error);
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