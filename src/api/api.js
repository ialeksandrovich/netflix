import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '019aa4c116849a542011b974781a127a';
export const BIG_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
export const SMALL_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

export function getMoviesByTitle(title) {
    return axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${title}`);
};

export function getMoviesByDirector(director) {
    return axios.get(`${BASE_URL}/search/person?api_key=${KEY}&query=${director}`);
};

export function getMovieDetails(movieId) {
    return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
};