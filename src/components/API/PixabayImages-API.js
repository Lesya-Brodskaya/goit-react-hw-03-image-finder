import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '34292986-668a020bed047eca08aa180e6';

async function fetchImages(query, page) {
  const url = `${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchImages;
