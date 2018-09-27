describe('Geocoder', () => {
  let Geocoder;
  let expectedInstance;
  beforeEach(() => {
    jest.resetModules();
    Geocoder = require('../Geocoder').default;
    expectedInstance = { id: 'old' };
    Geocoder.getGeocoder = jest.fn(() => expectedInstance);
  });

  test('instance', () => {
    // Arrange
    // Act
    const actualInstance = Geocoder.instance;
    // Assert
    expect(actualInstance).toEqual(expectedInstance);
  });

  test('single instance', () => {
    // Arrange
    const expectedNewInstance = { id: 'new' };
    Geocoder = require('../Geocoder').default;
    Geocoder.getGeocoder = jest.fn(() => expectedNewInstance);

    // Act
    const actualInstance = Geocoder.default.instance;
    // Assert
    expect(actualInstance).toEqual(expectedInstance);
  });
});
