describe('GooglePlacesContainer', () => {
  test('handleChange', () => {
    // arrange
    const expectedValue = 'Kazan';
    const expectedState = {
      value: expectedValue,
    };
    const GooglePlacesContainer = require('./GooglePlacesContainer').default;
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
    const GooglePlacesContainer = require('./GooglePlacesContainer').default;
    // act
    const googlePlacesContainer = new GooglePlacesContainer();
    // assert
    expect(googlePlacesContainer.state).toEqual(expectedState);
  });
});
