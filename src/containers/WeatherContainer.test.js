import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../constants/constants';

/* eslint-disable max-len */
describe('WeatherContainer', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('componentDidMount', () => {
    // arrange
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;

    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();

    const mockSetWeatherAndImage = jest.fn();
    weatherContainer.setWeatherAndImage = mockSetWeatherAndImage;

    // act
    weatherContainer.componentDidMount();

    // assert
    expect(weatherContainer.setWeatherAndImage).toBeCalledWith(expectedLat, expectedLng);
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
      imageData: expectedImageData,
    };

    function fakeSetState(newState) {
      this.state = newState;
    }

    jest.mock('../adapters/weatherAdapter', () => mockGetWeather);
    jest.mock('../adapters/imageAdapter', () => mockGetImage);
    const WeatherContainer = require('./WeatherContainer').default;
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

    jest.mock('../adapters/weatherAdapter', () => mockGetWeather);

    const expectedErrorMessage = require('./WeatherContainer').ERROR_MESSAGE;

    const expectedState = {
      hasError: true,
      errorMessage: expectedErrorMessage,
    };

    function fakeSetState(newState) {
      this.state = newState;
    }
    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);

    // act
    await weatherContainer.setWeatherAndImage(expectedLat, expectedLng);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });
});
