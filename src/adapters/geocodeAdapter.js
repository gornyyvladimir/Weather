import geocodeApi from '../services/geocodeApi';

export default async (lat, lng) => {
  const geocodeArray = await geocodeApi(lat, lng);
  const geocodeObject = geocodeArray.reverse().find(component => component.types.includes('locality') && component.types.includes('political'));
  const city = geocodeObject.address_components.filter(component => component.types.includes('locality') && component.types.includes('political'))[0].long_name;
  const country = geocodeObject.address_components.filter(component => component.types.includes('country') && component.types.includes('political'))[0].long_name;
  return {
    city,
    country,
  };
};
