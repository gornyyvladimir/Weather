let instance = null;
/* eslint-disable */
export const getInstance = () =>
  (instance || (instance = new google.maps.Geocoder()));
