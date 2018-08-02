import fetchImage from '../services/imageApi';

const imageAdapter = async (weatherDescription) => {
  const { data: rawImageData } = await fetchImage(weatherDescription);
  return {
    imageUrl: rawImageData.urls.regular,
    userUrl: rawImageData.user.links.html,
    userName: rawImageData.user.name,
  };
};

export default imageAdapter;
