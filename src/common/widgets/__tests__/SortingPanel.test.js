import React from 'react';
import renderer from 'react-test-renderer';
import { SortingPanel } from '../SortingPanel';

const changeSortBy = jest.fn();
const getMovies = jest.fn();

let propsForReeleaseDateSorting, propsForRatingSorting;

describe('SortingPanel component', () => {
    beforeEach(() => {
        propsForReeleaseDateSorting = {
            sortBy: 'reeleaseDate',
            searchBy: 'title',
            searchValue: 'searchValue',
            changeSortBy: changeSortBy,
            getMovies: getMovies,
        };
        propsForRatingSorting = {
            sortBy: 'rating',
            searchBy: 'title',
            searchValue: 'searchValue',
            changeSortBy: changeSortBy,
            getMovies: getMovies,
        };
    });

    it('SortingPanel should be rendered properly if it received props sortBy = releaseDate', () => {
        const tree = renderer.create(
            <SortingPanel {...propsForReeleaseDateSorting} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('SortingPanel should be rendered properly if it received props sortBy = rating', () => {
        const tree = renderer.create(
            <SortingPanel {...propsForRatingSorting} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});