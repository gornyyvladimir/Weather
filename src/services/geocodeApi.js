import Geocoder from '../factories/Geocoder';

export default (lat, lng) => new Promise((resolve) => {
  Geocoder.instance.geocode({ location: { lat, lng } }, (geocodeObject) => {
    const addressComponents = geocodeObject[0].address_components;
    const city = addressComponents.filter(component => component.types.includes('locality', 'political'))[0].long_name;
    const country = addressComponents.filter(component => component.types.includes('country', 'political'))[0].long_name;
    resolve(`${city}, ${country}`);
  });
});
