export default () =>
  new Promise((success) => {
    navigator.geolocation.getCurrentPosition(success);
  });
