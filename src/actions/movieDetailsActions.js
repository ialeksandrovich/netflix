import * as api from '../api/api';

export const getMovieDetails = (movieId) => {
    return (dispatch) => {
        api.getMovieDetails(movieId)
            .then((response) => dispatch(getMovieDetailsSucceed(movieId, response.data)));
    }
};

export const getMovieDetailsSucceed = (movieId, movieDetails) => ({
    type: 'GET_MOVIE_DETAILS_SUCCEED',
    movieId: movieId,
    movieDetails: movieDetails
});