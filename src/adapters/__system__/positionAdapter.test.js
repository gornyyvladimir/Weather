describe('positionAdapter', () => {
  test('getPosition happy path', async () => {
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
    const fakeGeoLocation = {
      getCurrentPosition: (success) => { success(expectedPosition); },
    };
    global.navigator.geolocation = fakeGeoLocation;
    const getPosition = require('../positionAdapter').default;
    // act
    const actualPosition = await getPosition();

    // assert
    expect(actualPosition).toEqual(expectedPosition);
  });
});
