describe('positionAdapter', () => {
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
    // eslint-disable-next-line
    const success = require('./positionAdapter').success;
    // act
    success(expectedPosition, expectedResolve);
    // assert
    expect(expectedResolve).toBeCalledWith(expectedPosition);
  });
});
