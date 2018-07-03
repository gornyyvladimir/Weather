import axios from 'axios';

export const URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
export const TYPES = 'geocode';

export const fetchGooglePlaces = city => axios.get(URL, {
  params: {
    input: city,
    types: TYPES,
  },
});

