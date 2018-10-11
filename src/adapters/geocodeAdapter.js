import geocodeApi from '../services/geocodeApi';

export default async (lat, lng) => {
  const geocodeArray = await geocodeApi(lat, lng);
  console.log(geocodeArray);
  const geocodeObject = geocodeArray.reverse().find(component => component.types.includes('locality', 'political'));
  console.log(geocodeObject);
  const city = geocodeObject.address_components.filter(component => component.types.includes('locality', 'political'))[0].long_name;
  const country = geocodeObject.address_components.filter(component => component.types.includes('country', 'political'))[0].long_name;
  return {
    city,
    country,
  };
};
