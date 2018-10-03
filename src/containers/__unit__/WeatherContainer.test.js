import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE, DEFAULT_CITY, DEFAULT_COUNTRY, DEFAULT_USERNAME, DEFAULT_UNSPLASH_URL } from '../../constants/constants';
import expectedImage from '../default.jpeg';

describe('WeatherContainer', () => {
  const expectedCity = DEFAULT_CITY;
  const expectedCountry = DEFAULT_COUNTRY;

  beforeEach(() => {
    jest.resetModules();
  });

  test('constructor', () => {
    // arrange
    const expectedProps = {};
    const expectedState = {
      inputValue: '',
      city: DEFAULT_CITY,
      country: DEFAULT_COUNTRY,
      errorMessage: '',
      hasError: false,
      itemId: null,
      imageUrl: expectedImage,
      userName: DEFAULT_USERNAME,
      userUrl: DEFAULT_UNSPLASH_URL,
    };
    const WeatherContainer = require('../WeatherContainer').default;
    // act
    const weatherContainer = new WeatherContainer(expectedProps);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('componentDidMount Happy Path', async () => {
    // arrange
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;
    const expectedAddress = {
      city: expectedCity,
      country: expectedCountry,
    };

    const expectedState = {
      latitude: 55.793172899999995,
      longitude: 49.125101799999996,
      city: expectedCity,
      country: expectedCountry,
    };

    const expectedPosition = {
      coords: {
        accuracy: 58,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 55.793172899999995,
        longitude: 49.125101799999996,
        speed: null,
      },
      timestamp: 1536046415947,
    };
    function fakeSetState(newState) {
      this.state = newState;
    }
    const mockGeocodeAdapter = jest.fn(() => new Promise((resolve) => {
      resolve(expectedAddress);
    }));

    jest.mock('../../adapters/geocodeAdapter', () => mockGeocodeAdapter);
    const mockPositionAdapter = jest.fn(() => new Promise((resolve) => {
      resolve(expectedPosition);
    }));
    jest.mock('../../adapters/positionAdapter', () => mockPositionAdapter);

    const mockSetWeatherAndImage = jest.fn();

    const WeatherContainer = require('../WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.setWeatherAndImage = mockSetWeatherAndImage;

    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);

    // act
    await weatherContainer.componentDidMount();

    // assert
    expect(weatherContainer.setWeatherAndImage).toBeCalledWith(expectedLat, expectedLng);
    expect(mockPositionAdapter).toBeCalled();
    expect(mockGeocodeAdapter).toBeCalledWith(expectedPosition.coords.latitude, expectedPosition.coords.longitude);
    expect(weatherContainer.setWeatherAndImage).toBeCalledWith(expectedPosition.coords.latitude, expectedPosition.coords.longitude);
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('setWeatherAndImage - Happy path', async () => {
    // arrange
    const expectedWeatherDescription = 'Sunny';
    const expectedIcon = '01d';
    const expectedTemperature = {
      day: 29.94,
      min: 20.22,
      max: 30.4,
      night: 20.22,
      eve: 29.37,
      morn: 20.91,
    };

    const expectedDateTime = 1533110400;
    const expectedPressure = 1020.35;
    const expectedHumidity = 44;
    const expectedWindSpeed = 3.01;
    const expectedWindDirection = 322;
    const expectedClouds = 0;

    const expectedWeekWeather = [
      {
        datetime: expectedDateTime,
        temperature: expectedTemperature,
        pressure: expectedPressure,
        humidity: expectedHumidity,
        description: expectedWeatherDescription,
        icon: expectedIcon,
        speed: expectedWindSpeed,
        direction: expectedWindDirection,
        clouds: expectedClouds,
      },
    ];

    const expectedImageUrl = 'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=ccbf560869799321eebf9150b7b864ff';
    const expectedUserLink = 'https://unsplash.com/@lukaszlada';
    const expectedUserName = 'Vladimir Vladimirovich';

    const expectedImageData = {
      imageUrl: expectedImageUrl,
      userUrl: expectedUserLink,
      userName: expectedUserName,
    };

    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;
    const mockGetWeather = jest.fn(() => new Promise((resolve) => {
      resolve(expectedWeekWeather);
    }));

    const mockGetImage = jest.fn(() => new Promise((resolve) => {
      resolve(expectedImageData);
    }));

    const expectedState = {
      weekWeather: expectedWeekWeather,
      imageUrl: expectedImageUrl,
      userUrl: expectedUserLink,
      userName: expectedUserName,
    };

    function fakeSetState(newState) {
      this.state = newState;
    }

    jest.mock('../../adapters/weatherAdapter', () => mockGetWeather);
    jest.mock('../../adapters/imageAdapter', () => mockGetImage);
    const WeatherContainer = require('../WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);

    // act
    await weatherContainer.setWeatherAndImage(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
    expect(mockGetWeather).toBeCalledWith(expectedLat, expectedLng);
    expect(mockGetImage).toBeCalledWith(expectedWeatherDescription);
  });

  test('setWeatherAndImage getWeather fails', async () => {
    // arrange
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;

    const expectedError = {
      cod: '400',
      message: 'strconv.ParseInt: parsing "daily1": invalid syntax',
    };
    const mockGetWeather = jest.fn(() => new Promise((resolve, reject) => {
      reject(expectedError);
    }));

    jest.mock('../../adapters/weatherAdapter', () => mockGetWeather);

    const expectedErrorMessage = require('../WeatherContainer').ERROR_MESSAGE;

    const expectedState = {
      hasError: true,
      errorMessage: expectedErrorMessage,
    };

    function fakeSetState(newState) {
      this.state = newState;
    }
    const WeatherContainer = require('../WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);

    // act
    await weatherContainer.setWeatherAndImage(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });

  test('setLocation', () => {
    // arrange
    const expectedState = {
      city: expectedCity,
      country: expectedCountry,
    };
    function fakeSetState(newState) {
      this.state = newState;
    }
    const WeatherContainer = require('../WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    weatherContainer.setLocation(expectedCity, expectedCountry);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });
});
