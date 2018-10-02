import geocodeApi from '../services/geocodeApi';

export default async (lat, lng) => {
  const geocodeObject = await geocodeApi(lat, lng);

  const addressComponents = geocodeObject[0].address_components;
  const city = addressComponents.filter(component => component.types.includes('locality', 'political'))[0].long_name;
  const country = addressComponents.filter(component => component.types.includes('country', 'political'))[0].long_name;

  return {
    city,
    country,
  };
};
