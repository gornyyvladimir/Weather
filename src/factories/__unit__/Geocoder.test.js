describe('Geocoder', () => {
  class Geocoder {}
  global.google = { maps: { Geocoder } };

  beforeEach(() => {
    jest.resetModules();
  });

  test('getInstance', () => {
    // Arrange
    const { getInstance } = require('../Geocoder');
    // Act
    const actualInstance = getInstance();
    // Assert
    expect(actualInstance).toBeInstanceOf(Geocoder);
  });

  test('getInstance single instance', () => {
    // Arrange
    const { getInstance } = require('../Geocoder');
    const expectedInstance = getInstance();

    // Act
    const actualInstance = getInstance();
    // Assert
    expect(actualInstance).toBe(expectedInstance);
  });
});
