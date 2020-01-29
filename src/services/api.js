import axios from "axios";

export const fetchTrends = () =>
  axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=84a23f82b9362154e36c39c8577e0da4"
  );

export const searchMovies = (query = "Superman") =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US&query=${query}&page=1&include_adult=false`
  );

export const searchExactMovie = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US`
  );

export const searchCast = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=84a23f82b9362154e36c39c8577e0da4`
  );

export const searchReview = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US&page=1`
  );
