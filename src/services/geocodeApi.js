import { getInstance } from '../factories/Geocoder';

export default (lat, lng) => new Promise((resolve) => {
  getInstance().geocode({ location: { lat, lng } }, (geocodeObject) => {
    resolve(geocodeObject);
  });
});
