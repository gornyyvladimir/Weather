import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Input = styled.input`
  background: transparent;
  width: 100%;
  color: white;
  font-size: 22px;
  font-weight: 300;
  border: none;
  border-bottom: 2px solid white;
  border-color: white;
  transition: border-color 0.5s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }
`;

const SuggestionsWrapper = styled.div`
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .5);
`;

const SuggestionItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  
  &:hover {
    background: #ccc;
  }
`;

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
      <Wrapper>
        <Input
          {...getInputProps({
            placeholder: 'Search Places ...',
          })}
        />
        <SuggestionsWrapper>
          {loading && <SuggestionItem>Loading...</SuggestionItem>}
          {suggestions.map(suggestion => (
            <SuggestionItem
              {...getSuggestionItemProps(suggestion)}
            >
              <span>{suggestion.description}</span>
            </SuggestionItem>
              ))
            }
        </SuggestionsWrapper>
      </Wrapper>
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
