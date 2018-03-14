import React, { Component } from 'react';
import moment from 'moment';
import fetchWeather from "../services/api"

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {city: "Moscow"};
  }

  componentDidMount() {
    this.getWeather("New York");
  }

  async getWeather(searchedCity = this.state.city) {
    try {
      const data = await fetchWeather(searchedCity);
      const weather = data.list.map(dayWeather => ({ dayWeather }));

      this.setState({
        weekWeather: weather,
        city: searchedCity
      });
    }
    catch(error) {
      console.log(error);
    }
  }

  render() {
    const days = {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
  };
    return (
      <div>
      {this.state.weekWeather && 
        <ul>
          {this.state.weekWeather.map((item,key) => (
            <li key={key}>{`${moment(new Date(item.dayWeather.dt*1000)).calendar(null, days)} ${item.dayWeather.temp.day}`}</li>
          ))}
        </ul>
      }
      </div>
    );
  }
}

export default WeatherContainer;