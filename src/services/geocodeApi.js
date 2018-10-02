import Geocoder from '../factories/Geocoder';

export default (lat, lng) => new Promise((resolve) => {
  Geocoder.instance.geocode({ location: { lat, lng } }, (geocodeObject) => {
    resolve(geocodeObject);
  });
});
