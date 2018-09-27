let instance = null;

export default {
  getGeocoder: () => {
    instance = new google.maps.Geocoder();
    return instance;
  },
  instance: instance || (function () {
    return this.getGeocoder();
  }()),
};
