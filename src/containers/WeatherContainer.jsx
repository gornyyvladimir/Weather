import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import fetchWeather from '../services/weatherApi';
import fetchImage from '../services/imageApi';
import weatherHelper from '../helpers/weather';
import WeatherPage from '../components/WeatherPage';
import ProgressiveBackground from '../components/ProgressiveBackground';
import defaultImage from './default.jpeg';
import defaultWeather from '../helpers/defaultWeather';

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

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      city: 'City',
      country: 'Country',
      weekWeather: defaultWeather,
      errorMessage: '',
      hasError: false,
      width: 900,
      height: 600,
      itemId: null,
    };

    this.getWeatherAndImageDebounced = debounce(this.getWeatherAndImage, 1000);
  }

  componentDidMount() {
    this.getWeatherAndImage('Kazan', this.state.width, this.state.height);
  }

  getWeather = async (lat, lon) => {
    try {
      const weather = await fetchWeather(lat, lon);
      this.setState({
        weekWeather: weather.data.list,
        city: weather.data.city.name,
        country: weather.data.city.country,
        hasError: false,
        errorMessage: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.setState({ hasError: true });
      }
    }
  }

  getImage = async (weatherDescription, width = null, height = null) => {
    try {
      const image = await fetchImage(weatherDescription, width, height);
      this.setState(prevState => ({
        prevImage: prevState.image || null,
        image: image.data.urls.custom,
        errorMessage: '',
      }));
    } catch (error) {
      this.setState({
        image: defaultImage,
        errorMessage: error.message,
      });
    }
  }

  getWeatherAndImage = async (lat, lon, w = null, h = null) => {
    // weather request
    let weekWeather;
    try {
      const weather = await fetchWeather(lat, lon);
      // var because wee need this in image request
      weekWeather = weather.data.list.map(dayWeather => ({ ...dayWeather }));

      this.setState({
        weekWeather,
        city: weather.data.city.name,
        country: weather.data.city.country,
        hasError: false,
        errorMessage: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.setState({ hasError: true });
        return;
      }
      this.setState({
        image: defaultImage,
        errorMessage: error.message,
      });
    }
    // image request
    try {
      // if weather request failed
      if (!weekWeather) {
        throw new Error(`Weather request error: ${this.state.errorMessage}`);
      }
      const image = await fetchImage(weatherHelper(weekWeather[0].weather[0].main), w, h);
      this.setState(prevState => ({
        prevImage: prevState.image || null,
        image: image.data.urls.custom,
        errorMessage: '',
      }));
    } catch (error) {
      this.setState({
        image: defaultImage,
        errorMessage: error.message,
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
