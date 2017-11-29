import React from 'react';
import renderer from 'react-test-renderer';
import { MoviesList } from '../MoviesList';

const getMovieDetails = jest.fn();

let props, propsWithNoMovies;
jest.mock('../MovieItem', () => 'item');

describe('MoviesList component', () => {
    beforeEach(() => {
        props = {
            movies: [
                {
                    id: 1,
                    poster_path: 'poster_path1',
                    title: 'title1',
                    vote_average: 1,
                    release_date: '1111-11-11',
                },{
                    id: 2,
                    poster_path: 'poster_path2',
                    title: 'title2',
                    vote_average: 2,
                    release_date: '2222-22-22',
                }
            ],
            getMovieDetails: getMovieDetails,
            searchValue: 'searchValue',
            searchBy: 'title',
            sortBy: 'reeleaseDate',
        };

        propsWithNoMovies = {
            movies: [],
            getMovieDetails: getMovieDetails,
            searchValue: 'searchValue',
            searchBy: 'title',
            sortBy: 'reeleaseDate',
        };
    });

    it('MovieItem should render \'No films found\' if it received empty array movies', () => {
        const tree = renderer.create(
            <MoviesList {...propsWithNoMovies} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('MovieItem should render all received movies', () => {
        const tree = renderer.create(
            <MoviesList {...props} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});