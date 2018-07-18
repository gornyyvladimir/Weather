import axios from 'axios';

const UNSPLASH_ACCESS_KEY = '26b7f4ae5d1b87f63fa766a4bd26a22f894a3fb1f034c66058b802bfa78bab0f';
const UNSPLASH_API_URL = 'https://api.unsplash.com';

const fetchImage = async (query, w = null, h = null, orientation = null, featured = null) => {
  const response = await axios.get(`${UNSPLASH_API_URL}/photos/random`, {
    params: {
      query,
      w,
      h,
      orientation,
      featured,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response;
};

export default fetchImage;
