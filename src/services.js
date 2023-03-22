import axios from 'axios';

const API_KEY = 'cf74a053caf2f13dcb273d105945eeb6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => {
  return axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    resp => resp.data.results
  );
};

export const getMovieCard = movieId => {
  return axios(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then(
    resp => resp.data
  );
};

export const getMovieCredits = movieId => {
  return axios(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    resp => {
      return resp.data.cast;
    }
  );
};

export const getMovieReviews = movieId => {
  return axios(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    resp => {
      return resp.data.results;
    }
  );
};
export const getSearchMovie = query => {
  return axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then(resp => {
    return resp.data.results;
  });
};
