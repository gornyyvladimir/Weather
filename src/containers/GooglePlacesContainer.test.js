describe('GooglePlacesContainer', () => {
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

  test('handleSelect', () => {
    // arrange
    const expectedAddress = 'Kazan';
    const mockOnAddressChange = jest.fn();
    const expectedProps = {
      onAddressChange: mockOnAddressChange,
    };
    const googlePlacesContainer = new GooglePlacesContainer(expectedProps);
    // act
    googlePlacesContainer.handleSelect(expectedAddress);
    // assert
    expect(googlePlacesContainer.props.onAddressChange).toBeCalledWith(expectedAddress);
  });
});
