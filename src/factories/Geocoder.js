// eslint-disable-next-line
export const getInstance = () => new google.maps.Geocoder();

export default {
  instance: getInstance(),
};
