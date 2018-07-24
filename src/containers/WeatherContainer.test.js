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

  test('getImage - Happy Path', async () => {
    // arrange
    const exptectedWeekWeather = [{
      weather: [{
        main: 'Sunny',
      }],
    }];

    const expectedImage = {
      data: {
        urls: {
          custom: 'http://unsplash/myimage.jpeg',
        },
      },
    };

    const expectedImageUrl = 'http://unsplash/myimage.jpeg';

    const expectedState = {
      prevImage: null,
      image: expectedImageUrl,
      errorMessage: '',
    };
    const expectedWidth = 1920;
    const expectedHeight = 1080;
    const mockWeatherHelper = jest.fn(() => 'Sunny');
    jest.mock('../helpers/weather', () => mockWeatherHelper);

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
    await weatherContainer.getImage(exptectedWeekWeather, expectedWidth, expectedHeight);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });
});
