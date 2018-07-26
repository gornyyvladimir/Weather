/* eslint-disable max-len */
describe('WeatherContainer', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('getWeather - Happy Path', async () => {
    // arrange
    const expectedWeekWeather = [{}];
    const expectedCity = 'Kazan';
    const expectedCountry = 'Russia';
    const expectedState = {
      weekWeather: expectedWeekWeather,
      city: expectedCity,
      country: expectedCountry,
      hasError: false,
      errorMessage: '',
    };
    const expectedWeather = {
      data: {
        list: expectedWeekWeather,
        city: {
          name: expectedCity,
          country: expectedCountry,
        },
      },
    };
    const mockFetchWeather = jest.fn(() => new Promise((resolve) => { resolve(expectedWeather); }));

    jest.mock('../services/weatherApi', () => mockFetchWeather);
    const WeatherContainer = require('./WeatherContainer').default;
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    function fakeSetState(obj) {
      this.state = obj;
    }
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getWeather(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
    expect(mockFetchWeather).toBeCalledWith(expectedLat, expectedLng);
  });

  test('getWeather - failed, has response status 404', async () => {
    // arrange
    const expectedState = {
      hasError: true,
    };
    const expectedResponseStatus = 404;
    const expectedError = {
      response: {
        status: expectedResponseStatus,
      },
    };
    const mockFetchWeather = jest.fn(() => new Promise((resolve, reject) => {
      reject(expectedError);
    }));

    jest.mock('../services/weatherApi', () => mockFetchWeather);
    const WeatherContainer = require('./WeatherContainer').default;
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    function fakeSetState(obj) {
      this.state = obj;
    }
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getWeather(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('getWeather - failed, has response status 500', async () => {
    // arrange
    const expectedWeekWeather = [{}];
    const expectedCity = 'Kazan';
    const expectedCountry = 'Russia';
    const expectedState = {
      weekWeather: expectedWeekWeather,
      city: expectedCity,
      country: expectedCountry,
      hasError: false,
      errorMessage: '',
    };
    const expectedResponseStatus = 500;
    const expectedError = {
      response: {
        status: expectedResponseStatus,
      },
    };
    const mockFetchWeather = jest.fn(() => new Promise((resolve, reject) => {
      reject(expectedError);
    }));

    jest.mock('../services/weatherApi', () => mockFetchWeather);
    const WeatherContainer = require('./WeatherContainer').default;
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    function fakeSetState(obj) {
      this.state = obj;
    }
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = expectedState;
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getWeather(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('getImage - Happy Path', async () => {
    // arrange
    const expectedWeatherDescription = 'Sunny';

    const expectedImageUrl = 'http://unsplash/myimage.jpeg';
    const expectedImage = {
      data: {
        urls: {
          custom: expectedImageUrl,
        },
      },
    };

    const expectedState = {
      prevImage: null,
      image: expectedImageUrl,
      errorMessage: '',
    };
    const expectedWidth = 1920;
    const expectedHeight = 1080;

    const mockFetchImage = jest.fn(() => new Promise((resolve) => { resolve(expectedImage); }));
    jest.mock('../services/imageApi', () => mockFetchImage);

    function fakeSetState(stateModifier) {
      this.state = { ...this.state, ...stateModifier(this.state) };
    }
    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getImage(expectedWeatherDescription, expectedWidth, expectedHeight);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('getImage - failed', async () => {
    // arrange
    const expectedWeekWeather = [{
      weather: [{
        main: 'Sunny',
      }],
    }];

    const expectedErrorMessage = 'Sorry, your princess is in another castle';
    const expectedError = { message: expectedErrorMessage };

    const expectedDefaultImage = 'default.jpeg';

    const expectedState = {
      image: expectedDefaultImage,
      errorMessage: expectedErrorMessage,
    };
    const expectedWidth = 1920;
    const expectedHeight = 1080;
    const mockWeatherHelper = jest.fn(() => 'Sunny');
    jest.mock('../helpers/weather', () => mockWeatherHelper);

    const mockFetchImage = jest.fn(() => new Promise((resolve, reject) => {
      reject(expectedError);
    }));
    jest.mock('../services/imageApi', () => mockFetchImage);

    function fakeSetState(state) {
      this.state = state;
    }
    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getImage(expectedWeekWeather, expectedWidth, expectedHeight);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('getWeatherAndImage with weatherDescription', () => {
    // arrange
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    const expectedWidth = 1920;
    const expectedHeight = 1080;
    const expectedWeatherDescription = 'Sunny';
    const mockGetWeather = jest.fn();
    const mockGetImage = jest.fn();
    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.getWeather = mockGetWeather;
    weatherContainer.getImage = mockGetImage;
    // act
    weatherContainer.getWeatherAndImage(expectedLat, expectedLng, expectedWidth, expectedHeight);
    // assert
    expect(weatherContainer.getWeather).toBeCalledWith(expectedLat, expectedLng);
    expect(weatherContainer.getImage).toBeCalledWith(expectedWeatherDescription, expectedWidth, expectedHeight);
  });
});
