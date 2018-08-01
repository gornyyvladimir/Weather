describe('imageAdapter', () => {
  test('default', async () => {
    // arrange
    const expectedWeatherDescription = 'Sunny';

    const expectedImageUrl = 'http://unsplash/myimage.jpeg';
    const expectedImage = {
      data: {
        urls: {
          custom: expectedImageUrl,
        },
      },
    };

    const expectedWidth = 1920;
    const expectedHeight = 1080;

    const mockFetchImage = jest.fn(() => new Promise((resolve) => { resolve(expectedImage); }));
    jest.mock('../services/imageApi', () => mockFetchImage);
    const imageAdapter = require('./imageAdapter').default;
    // act
    const actualImage = await imageAdapter(expectedWeatherDescription, expectedWidth, expectedHeight);
    // assert
    expect(actualImage).toEqual(expectedImage);
    expect(mockFetchImage)
      .toBeCalledWith(expectedWeatherDescription, expectedWidth, expectedHeight);
  });
});
