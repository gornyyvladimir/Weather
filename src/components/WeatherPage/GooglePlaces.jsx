import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class GooglePlaces extends React.Component {
  render() {
    return (
      <PlacesAutocomplete
        value=""
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            here will be an autocomplete input
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default GooglePlaces
