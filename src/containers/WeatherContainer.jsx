import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE, DEFAULT_COUNTRY, DEFAULT_CITY, DEFAULT_USERNAME, DEFAULT_UNSPLASH_URL, DEFAULT_NO_POSITION_ERROR } from '../constants/constants';
import getWeather from '../adapters/weatherAdapter';
import getImage from '../adapters/imageAdapter';
import WeatherPage from '../components/WeatherPage';
import ProgressiveBackground from '../components/ProgressiveBackground';
import image from './default.jpeg';
import getPosition from '../adapters/positionAdapter';
import geocodeAdapter from '../adapters/geocodeAdapter';

const ErrorMessage = styled.p`
  background: #e84118;
  color: white;
  font-weight: 300;
  margin: 0;
  padding: 20px 30px;
  text-align: center;
`;

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

export const ERROR_MESSAGE = 'Sorry! We can\'t get weather now!!! ¯\\_(ツ)_/¯';

class WeatherContainer extends Component {
  state = {
    inputValue: '',
    city: DEFAULT_CITY,
    country: DEFAULT_COUNTRY,
    errorMessage: '',
    hasError: false,
    itemId: null,
    imageUrl: image,
    userName: DEFAULT_USERNAME,
    userUrl: DEFAULT_UNSPLASH_URL,
  };

  async componentDidMount() {
    this.setWeatherAndImage(DEFAULT_LATITUDE, DEFAULT_LONGITUDE);
    try {
      const position = await getPosition();
      this.setWeatherAndImage(position.coords.latitude, position.coords.longitude);
      const address = await geocodeAdapter(position.coords.latitude, position.coords.longitude);
      // eslint-disable-next-line
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        ...address,
      });
    } catch (error) {
      this.setState({
        errorMessage: DEFAULT_NO_POSITION_ERROR,
      });
    }
  }

  setWeatherAndImage = async (lat, lon) => {
    let state = {};
    try {
      const weekWeather = await getWeather(lat, lon);
      const weatherDescription = weekWeather[0].description;
      let imageData;
      try {
        imageData = await getImage(weatherDescription);
      } catch (getImageError) {
        state = {
          weekWeather,
        };
      }
      state = {
        weekWeather,
        ...imageData,
      };
    } catch (getWeatherError) {
      state = {
        hasError: true,
        errorMessage: ERROR_MESSAGE,
      };
    } finally {
      this.setState(state);
    }
  };

  setLocation = (city, country) => {
    this.setState({
      city,
      country,
    });
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });

    this.setWeatherAndImage(e.target.value, this.state.width, this.state.height);
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
      <Fragment>
        {
          this.state.errorMessage &&
          <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
        }
        <Wrapper>
          <Container>
            <Shadow>
              <WeatherPage
                {...this.state}
                onChange={this.handleChange}
                onClick={this.handleClick}
                onClose={this.handleClose}
                setWeatherAndImage={this.setWeatherAndImage}
                setLocation={this.setLocation}
              />
            </Shadow>
          </Container>
          {
            this.state.imageUrl &&
            <ProgressiveBackground imageUrl={this.state.imageUrl} prevImage={this.state.prevImage} />
          }
        </Wrapper>
      </Fragment>
    );
  }
}

export default WeatherContainer;
