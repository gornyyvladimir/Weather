/* eslint-disable max-len */
describe('WeatherContainer', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('setWeatherAndImage - Happy path', () => {
    // arrange
    const expectedLat = 55.8304307;
    const expectedLng = 49.06608060000008;
    const expectedWidth = 1920;
    const expectedHeight = 1080;
    const expectedWeatherDescription = 'Sunny';
    const mockGetWeather = jest.fn();
    const mockGetImage = jest.fn();
    jest.mock('../adapters/weatherAdapter', () => mockGetWeather);
    jest.mock('../adapters/imageAdapter', () => mockGetImage);
    const WeatherContainer = require('./WeatherContainer').default;
    const weatherContainer = new WeatherContainer();
    // act
    weatherContainer.setWeatherAndImage(expectedLat, expectedLng, expectedWidth, expectedHeight);
    // assert
    expect(mockGetWeather).toBeCalledWith(expectedLat, expectedLng);
    expect(mockGetImage).toBeCalledWith(expectedWeatherDescription, expectedWidth, expectedHeight);
  });
});
