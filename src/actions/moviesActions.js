import * as api from '../api/api';

export const changeSearchValue = (searchValue) => ({
    type: 'CHANGE_SEARCH_VALUE',
    searchValue
});

export const changeSearchParameter = (searchBy) => ({
    type: 'CHANGE_SEARCH_PARAMETER',
    searchBy
});

export const changeSortingParameter = (sortBy) => ({
    type: 'CHANGE_SORTING_PARAMETER',
    sortBy
});

export const getMovies = (searchBy, sortBy, searchValue) => {
    if (!searchValue) {
        return getMoviesSucceed([]);
    }

    return (dispatch) => {
        if ( searchBy === 'title' ) {
            api.getMoviesByTitle(searchValue)
                .then((response) => dispatch(getMoviesSucceed(response.data.results)));
        } else if ( searchBy === 'director' ) {
            api.getMoviesByDirector(searchValue)
                .then((response) => dispatch(getMoviesSucceed(response.data.results[0]['known_for'])));
        }
    }
};

export const getMoviesSucceed = (movies) => ({
    type: 'GET_MOVIES_SUCCEED',
    movies: movies
});