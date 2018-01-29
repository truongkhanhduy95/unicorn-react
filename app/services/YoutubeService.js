import axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC0RNalJU_dpTZNHy-WZpH64vxxnppjmTc';

export default class YoutubeService {
  search(term, callback) {
    // const url = 'https://jsonplaceholder.typicode.com/todos';
    // console.log(url);
    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     callback(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    YTSearch(
      {
        key: API_KEY,
        term,
      },
      (data) => {
        console.log(data);
        callback(data);
      },
    );
  }

  fetchVideos(term) {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&key=${API_KEY}&part=snippet&q=${term}`;
    return axios.get(url);
  }
}
