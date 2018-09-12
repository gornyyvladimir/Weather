export default () =>
  new Promise((success, error) => {
    navigator.geolocation.getCurrentPosition(success, error);
  });
