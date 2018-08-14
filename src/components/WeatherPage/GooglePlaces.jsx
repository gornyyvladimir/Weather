import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

const GooglePlaces = ({
  value, onChange, onSelect, searchOptions,
}) => (
  <PlacesAutocomplete
    value={value}
    onChange={onChange}
    onSelect={onSelect}
    searchOptions={searchOptions}
  >
    {({
 getInputProps, suggestions, getSuggestionItemProps, loading,
}) => (
  <div>
    <input
      {...getInputProps({
          placeholder: 'Search Places ...',
        })}
    />
    <div>
      {loading && <div>Loading...</div>}
      {suggestions.map(suggestion => (
        <div
          {...getSuggestionItemProps(suggestion)}
        >
          <span>{suggestion.description}</span>
        </div>
          ))
        }
    </div>
  </div>
    )}
  </PlacesAutocomplete>
);

GooglePlaces.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  searchOptions: PropTypes.shape({
    types: PropTypes.array.isRequired,
  }).isRequired,
};

export default GooglePlaces;
