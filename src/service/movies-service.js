import axios from 'axios';
import { transformMovies, transformMovieById, transformMovieCast, transformMovieRewiews } from 'helpers';

const options = {
  method: 'GET',
  baseURL: 'https://api.themoviedb.org/3',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzlhODIzZTI5MmRhZDEzYTI4NWExOTMxNzJjYzJkOSIsInN1YiI6IjY0YTg0ZGUwOWM5N2JkMDBhZGU5OWNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6wA3r3IaV30vcsiYQBrUvuHxc8ByDuquBCTZG7iu5o'
  }
};

export const getTrandingMovies = async () => {
  const { data } = await axios.get('/trending/movie/week', options)
  const movies = transformMovies(data);

  return movies;
};

export const getSearchedMovies = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options)
  const movies = transformMovies(data);

  return movies;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, options)
  const movie = transformMovieById(data);

  return movie;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, options)
  const cast = transformMovieCast(data);

  return cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options)
  const reviews = transformMovieRewiews(data);

  return reviews;
};