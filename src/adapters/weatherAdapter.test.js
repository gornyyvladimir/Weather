describe('weatherAdapter', () => {
  test('default', async () => {
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
    const expectedRawWeekWeather = [
      {
        dt: expectedDateTime,
        temp: expectedTemperature,
        pressure: expectedPressure,
        humidity: expectedHumidity,
        weather: [
          {
            id: 800,
            main: expectedWeatherDescription,
            description: 'sky is clear',
            icon: expectedIcon,
          },
        ],
        speed: expectedWindSpeed,
        deg: expectedWindDirection,
        clouds: expectedClouds,
      },
    ];
    const expectedCity = 'Kazan';
    const expectedCountry = 'Russia';
    const expectedRawWeather = {
      data: {
        list: expectedRawWeekWeather,
        city: {
          name: expectedCity,
          country: expectedCountry,
        },
      },
    };
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

    const mockFetchWeather = jest.fn(() => new Promise((resolve) => { resolve(expectedRawWeather); }));
    jest.mock('../services/weatherApi', () => mockFetchWeather);
    const weatherAdapter = require('./weatherAdapter').default;
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    // act
    const actualWeekWeather = await weatherAdapter(expectedLat, expectedLng);
    // assert
    expect(actualWeekWeather).toEqual(expectedWeekWeather);
    expect(mockFetchWeather).toBeCalledWith(expectedLat, expectedLng);
  });
});
