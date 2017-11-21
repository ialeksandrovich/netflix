const initialState = {
    sortBy: 'reeleaseDate',
    searchBy: 'title',
    searchValue: '',
    movies: [],
};

function sortMovies(movies, sortBy) {
    if (sortBy === 'rating') {
        return Object.assign([], movies).sort(function (prevMovie, nextMovie) { return (nextMovie.vote_average - prevMovie.vote_average); });
    } else if (sortBy === 'reeleaseDate') {
        return Object.assign([], movies).sort(function (prevMovie, nextMovie) { return (new Date(nextMovie.release_date) - new Date(prevMovie.release_date)); });
    }
}

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.searchValue
            };
        case 'CHANGE_SEARCH_PARAMETER':
            return {
                ...state,
                searchBy: action.searchBy
            };
        case 'CHANGE_SORTING_PARAMETER':
            return {
                ...state,
                sortBy: action.sortBy,
                movies: sortMovies(state.movies, action.sortBy)
            };
        case 'GET_MOVIES_SUCCEED':
            return {
                ...state,
                movies: sortMovies(action.movies, state.sortBy)
            };
        default:
            return state;
    }
}