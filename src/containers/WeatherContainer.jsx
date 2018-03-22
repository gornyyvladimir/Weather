import React, { Component } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { fetchWeather, fetchImage }  from "../services/api"
import WeatherPage from '../components/WeatherPage'
import defaulImageBig from './big.jpeg';
import defaulImageSmall from './small.jpeg';

const Container = styled.div`
  margin: 0 auto;
`;

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Kazan',
      city: 'Kazan',
      hasError: false
    };

    this.getWeatherDebounced = debounce(this.getWeather, 1000);
  }

  componentDidMount() {
    this.getWeather();
    this.getImage('beach');
  }

  async getWeather(searchedCity = this.state.city) {
    try {
      const response = await fetchWeather(searchedCity);
      const weekWeather = response.data.list.map(dayWeather => ({ dayWeather }));

      this.setState({
        weekWeather,
        city: response.data.city.name,
        country: response.data.city.country,
        hasError: false
      });

      console.log(this.state);
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
      // this.setState({hasError: true});
      this.setState({
        image: {
          urls : {
            regular: defaulImageBig,
            thumb: defaulImageSmall
          }
        }
      });
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
    this.setState({
      inputValue: e.target.value
    });
    
    //if cityName.lenghth < 3, dont make request
    if(!e.target.value.length) {
      this.getWeatherDebounced.cancel();
      return;
    }
    this.getWeatherDebounced(e.target.value);
  }

  render() {
    return (
      <Container>
        <WeatherPage {...this.state} onChange={this.handleChange}/>
      </Container>
    );
  }
}

export default WeatherContainer;