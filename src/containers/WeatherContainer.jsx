import React, { Component } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import { fetchWeather, fetchImage }  from "../services/api"
import { isUnsplash } from "../helpers/urlParser"
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
      country: 'Ru',
      hasError: false,
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.getWeatherAndImageDebounced = debounce(this.getWeatherAndImage, 1000);    
  }

  componentDidMount() {
    this.getWeatherAndImage(this.state.city, this.state.width, this.state.height);
  }

  async getWeatherAndImage(searchedCity = this.state.city, w = null, h = null) {
    //weather request
    try {
      const weather = await fetchWeather(searchedCity);
      //var because wee need this in image request
      var weekWeather = weather.data.list.map(dayWeather => ({ dayWeather }));
      
      this.setState({
        weekWeather,
        city: weather.data.city.name,
        country: weather.data.city.country,
        hasError: false
      });
    }
    catch(error) {
      if(error.response.status === 404) {
        this.setState({hasError: true});
        console.log("City not found");
      }
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
      return;
    }
    //image request
    try {
      const image = await fetchImage(weekWeather[0].dayWeather.weather[0].main, w, h); 
      this.setState(prevState => ({
        prevImage: prevState.image || null,
        image: image.data.urls.custom
      }));
    }
    catch(error) {
      this.setState({
        image: defaulImageBig
      });
      console.log("Image not work");
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
    
    //dont make request
    if(!e.target.value.length) {
      this.getWeatherAndImageDebounced.cancel();
      return;
    }
    this.getWeatherAndImageDebounced(e.target.value, this.state.width, this.state.height);
  }

  render() {
    console.log(this.state);    
    return (
      <Container>
        <WeatherPage {...this.state} onChange={this.handleChange}/>
      </Container>
    );
  }
}

export default WeatherContainer;