import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../constants/constants';

describe('weatherApi', () => {
  test('default', async () => {
    // arrange
    const expectedResponse = {
      weather: 'data',
    };
    const mockAxios = {
      get: jest.fn((() => new Promise((resolve) => { resolve(expectedResponse); }))),
    };
    jest.mock('axios', () => mockAxios);
    const weatherApi = require('./weatherApi');
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;
    const expectedApiUrl = weatherApi.WEATHER_API_URL;
    const expectedKey = weatherApi.WEATHER_API_KEY;
    const expectedOptions = {
      params: {
        lat: expectedLat,
        lon: expectedLng,
        units: 'metric',
        cnt: 7,
        appid: expectedKey,
      },
    };
    const expectedUrl = `${expectedApiUrl}/forecast/daily`;
    // act
    const actualResponse = await weatherApi.default(expectedLat, expectedLng);
    // assert
    expect(mockAxios.get).toBeCalledWith(expectedUrl, expectedOptions);
    expect(actualResponse).toEqual(expectedResponse);
  });
});
