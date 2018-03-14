import React, { Component } from 'react';
import fetchWeather from "../services/api"
import WeatherPage from '../components/WeatherPage'

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Moscow",
      hasError: false
    };
  }

  componentDidMount() {
    this.getWeather("Kazan");
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
    this.getWeather(e.target.value);
  }

  render() {
    return <WeatherPage {...this.state} onChange={this.handleChange}/>
  }
}

export default WeatherContainer;