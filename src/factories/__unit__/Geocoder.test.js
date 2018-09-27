describe('Geocoder', () => {
  class Geocoder {}
  global.google = { maps: { Geocoder } };

  test('getInstance', () => {
    // Arrange
    const geocoder = require('../Geocoder').default;
    // Act
    const actualInstance = geocoder.instance;
    // Assert
    expect(actualInstance).toBeInstanceOf(Geocoder);
  });

  test('getInstance single instance', () => {
    // Arrange
    const expectedInstance = require('../Geocoder').default.instance;
    const geocoder = require('../Geocoder').default;

    // Act
    const actualInstance = geocoder.instance;
    // Assert
    expect(actualInstance).toBe(expectedInstance);
  });
});
