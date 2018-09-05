describe('positionAdapter', () => {
  afterEach(() => {
    global.resolve = null;
    global.reject = null;
  });

  test('success', () => {
    // arrange
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
    const expectedResolve = jest.fn();
    global.resolve = expectedResolve;
    // eslint-disable-next-line
    const success = require('./positionAdapter').success;
    // act
    success(expectedPosition);
    // assert
    expect(expectedResolve).toBeCalledWith(expectedPosition);
  });
  test('error', () => {
    // arrange
    const expectedPositionError = {
      code: 1,
      message: 'User denied Geolocation',
    };
    const expectedReject = jest.fn();
    global.reject = expectedReject;
    // eslint-disable-next-line
    const error = require('./positionAdapter').error;
    // act
    error(expectedPositionError);
    // assert
    expect(expectedReject).toBeCalledWith(expectedPositionError);
  });
});
