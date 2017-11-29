import moviesReducer from '../moviesReducer';

const initialState = {
    sortBy: 'reeleaseDate',
    searchBy: 'title',
    searchValue: '',
    movies: [],
};

describe('movies reducer', () => {
    it('should handle initial state', () => {
        expect(
            moviesReducer(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle CHANGE_SEARCH_VALUE', () => {
        expect(
            moviesReducer(initialState, {
                type: 'CHANGE_SEARCH_VALUE',
                searchValue: 'test'
            })
        ).toEqual({
            sortBy: 'reeleaseDate',
            searchBy: 'title',
            searchValue: 'test',
            movies: [],
        })
    })

    it('should handle CHANGE_SEARCH_PARAMETER', () => {
        expect(
            moviesReducer(initialState, {
                type: 'CHANGE_SEARCH_PARAMETER',
                searchBy: 'director'
            })
        ).toEqual({
            sortBy: 'reeleaseDate',
            searchBy: 'director',
            searchValue: '',
            movies: [],
        })
    })

    it('should handle CHANGE_SORTING_PARAMETER', () => {
        expect(
            moviesReducer(initialState, {
                type: 'CHANGE_SORTING_PARAMETER',
                sortBy: 'rating'
            })
        ).toEqual({
            sortBy: 'rating',
            searchBy: 'title',
            searchValue: '',
            movies: [],
        })
    })

})