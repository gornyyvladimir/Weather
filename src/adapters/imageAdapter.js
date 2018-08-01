import fetchImage from '../services/imageApi';

const imageAdapter = (weatherDescription, width = null, height = null) =>
  fetchImage(weatherDescription, width, height);
export default imageAdapter;
