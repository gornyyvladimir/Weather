import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../constants/constants';
import getWeather from '../adapters/weatherAdapter';
import getImage from '../adapters/imageAdapter';
import WeatherPage from '../components/WeatherPage';
import ProgressiveBackground from '../components/ProgressiveBackground';

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
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      city: 'City',
      country: 'Country',
      errorMessage: '',
      hasError: false,
      width: 900,
      height: 600,
      itemId: null,
    };
  }

  componentDidMount() {
    this.setWeatherAndImage(DEFAULT_LATITUDE, DEFAULT_LONGITUDE);
  }

  setWeatherAndImage = async (lat, lon) => {
    try {
      const weekWeather = await getWeather(lat, lon);
      const weatherDescription = weekWeather[0].description;
      const imageData = await getImage(weatherDescription);
      this.setState({
        weekWeather,
        imageData,
      });
    } catch (error) {
      this.setState({
        hasError: true,
        errorMessage: ERROR_MESSAGE,
      });
    }
  }

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
                getWeatherAndImage={this.getWeatherAndImage}
              />
            </Shadow>
          </Container>
          {
            this.state.image &&
            <ProgressiveBackground image={this.state.image} prevImage={this.state.prevImage} />
          }
        </Wrapper>
      </Fragment>
    );
  }
}

export default WeatherContainer;
