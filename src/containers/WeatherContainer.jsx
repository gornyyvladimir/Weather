import React, { Component } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { fetchWeather, fetchImage } from '../services/api';
import weatherHelper from '../helpers/weather';
import WeatherPage from '../components/WeatherPage';
import ProgressiveBackground from '../components/ProgressiveBackground';
import defaulImage from './default.jpeg';

const Wrapper = styled.div`
  ${breakpoint('tablet')`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  `}
`;

const Container = styled.div`
  ${breakpoint('tablet')`
    padding-left: 80px;
    padding-right: 80px;
    width: 100%;
    max-width: 1024px;
    box-sizing: border-box;
  `}
`;

const Shadow = styled.div`
  ${breakpoint('tablet')`
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  `}
`;

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Kazan',
      city: 'Kazan',
      country: 'Ru',
      hasError: false,
      width: 900,
      height: 600,
      itemId: null,
    };

    this.getWeatherAndImageDebounced = debounce(this.getWeatherAndImage, 1000);
  }

  componentDidMount() {
    this.getWeatherAndImage(this.state.city, this.state.width, this.state.height);
  }

  async getWeatherAndImage(searchedCity = this.state.city, w = null, h = null) {
    // weather request
    let weekWeather;
    try {
      const weather = await fetchWeather(searchedCity);
      // var because wee need this in image request
      weekWeather = weather.data.list.map(dayWeather => ({ ...dayWeather }));

      this.setState({
        weekWeather,
        city: weather.data.city.name,
        country: weather.data.city.country,
        hasError: false,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.setState({ hasError: true });
      }
      return;
    }
    // image request
    try {
      const image = await fetchImage(weatherHelper(weekWeather[0].weather[0].main), w, h);
      this.setState(prevState => ({
        prevImage: prevState.image || null,
        image: image.data.urls.custom,
      }));
    } catch (error) {
      this.setState({
        image: defaulImage,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });

    // dont make request
    if (!e.target.value.length) {
      this.getWeatherAndImageDebounced.cancel();
      return;
    }
    this.getWeatherAndImageDebounced(e.target.value, this.state.width, this.state.height);
  }

  handleClick = param => () => (
    this.setState({ itemId: param, animation: true })
  );

  handleClose = () => {
    // this.setState({card: null});
    this.setState({ animation: false });
    setTimeout(() => {
      this.setState({ itemId: null });
    }, 1000);
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Shadow>
            <WeatherPage
              {...this.state}
              onChange={this.handleChange}
              onClick={this.handleClick}
              onClose={this.handleClose}
            />
          </Shadow>
        </Container>
        {
          this.state.image &&
          <ProgressiveBackground image={this.state.image} prevImage={this.state.prevImage} />
        }
      </Wrapper>
    );
  }
}

export default WeatherContainer;
