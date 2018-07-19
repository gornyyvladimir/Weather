describe('WeatherContainer', () => {
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
    const expectedSearchedCity = 'Kazan';
    function fakeSetState(obj) {
      this.state = obj;
    }
    const weatherContainer = new WeatherContainer();
    weatherContainer.state = {};
    weatherContainer.setState = fakeSetState.bind(weatherContainer);
    // act
    await weatherContainer.getWeather(expectedSearchedCity);
    // assert
    expect(weatherContainer.state).toEqual(expectedState);
  });
});
