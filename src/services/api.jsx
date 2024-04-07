import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTljZGMyMjBkNmJmZTQ4NTc3MjI2ZmZlODk5MjVhNiIsInN1YiI6IjY2MGY5NTljODhjNjU5MDE2MjljNmY4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MV2BqQZ7J9oKFfBpuN3y7pkoAVGc5LRUot4Y36qMVBs',
  },
};

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );
  return data;
};

export const requestMovie = async query => {
  const { data } = await axios.get('search/movie', {
    ...options,
    params: { query },
  });
  return data;
};

export const requestMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const requestMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const requestMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data;
};