const initialState = {
    movieId: null,
    movieDetails: null
};

export default function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIE_DETAILS_SUCCEED':
            return {
                ...state,
                movieId: action.movieId,
                movieDetails: action.movieDetails
            };
        default:
            return state;
    }
}