describe('GooglePlacesContainer', () => {
  const expectedGeocodeResults = [{ place_id: 'ChIJmc2sfCutXkERZYyttbl3y38' }];
  const expectedLat = 55.8304307;
  const expectedLng = 49.06608060000008;
  const expectedLatLng = { lat: expectedLat, lng: expectedLng };

  const mockGetLatLng = jest.fn(() => new Promise((resolve) => {
    resolve(expectedLatLng);
  }));

  const mockGeocodeByAddress = jest.fn((() => new Promise((resolve) => {
    resolve(expectedGeocodeResults);
  })));

  const mockGooglePlaces = {
    geocodeByAddress: mockGeocodeByAddress,
    getLatLng: mockGetLatLng,
  };

  jest.mock('react-places-autocomplete', () => mockGooglePlaces);

  const GooglePlacesContainer = require('./GooglePlacesContainer').default;

  test('handleChange', () => {
    // arrange
    const expectedValue = 'Kazan';
    const expectedState = {
      value: expectedValue,
    };
    const googlePlacesContainer = new GooglePlacesContainer();
    function fakeSetState(obj) {
      this.state = obj;
    }
    googlePlacesContainer.setState = fakeSetState.bind(googlePlacesContainer);
    // act
    googlePlacesContainer.handleChange(expectedValue);
    // assert
    expect(googlePlacesContainer.state).toEqual(expectedState);
  });

  test('constructor', () => {
    // arrange
    const expectedState = {
      value: '',
    };
    // act
    const googlePlacesContainer = new GooglePlacesContainer();
    // assert
    expect(googlePlacesContainer.state).toEqual(expectedState);
  });

  test('handleSelect', async () => {
    // arrange
    const expectedAddress = 'Kazan';
    const mockOnAddressChange = jest.fn();
    const expectedProps = {
      onAddressChange: mockOnAddressChange,
    };
    const googlePlacesContainer = new GooglePlacesContainer(expectedProps);
    // act
    await googlePlacesContainer.handleSelect(expectedAddress);
    // assert
    expect(googlePlacesContainer.props.onAddressChange).toBeCalledWith(expectedLat, expectedLng);
  });
});
