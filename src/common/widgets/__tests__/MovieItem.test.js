import React from 'react';
import renderer from 'react-test-renderer';
import { MovieItem } from '../MovieItem';

const getMovieDetails = jest.fn();

let props;

describe('MovieItem component', () => {
    beforeEach(() => {
        props = {
            movie: {
                id: 123,
                poster_path: 'poster_path',
                title: 'title',
                vote_average: 0,
                release_date: '2017-01-01',
            },
            getMovieDetails: getMovieDetails,
            history: [],
        };
    });

    it('MovieItem should be rendered correctly', () => {
        const tree = renderer.create(
            <MovieItem {...props} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('MovieItem should call getMovieDetails action after movie title link was clicked', () => {
        const tree = shallow(<MovieItem {...props} />);
        const link = tree.find('.title');
        const fakeEvent = { preventDefault: () => 'preventDefault' };

        link.simulate('click', fakeEvent);
        expect(getMovieDetails).toHaveBeenCalledWith(123);
    });

    it('MovieItem should call getMovieDetails action after movie poster link was clicked', () => {
        const tree = shallow(<MovieItem {...props} />);
        const link = tree.find('.poster');
        const fakeEvent = { preventDefault: () => 'preventDefault' };

        link.simulate('click', fakeEvent);
        expect(getMovieDetails).toHaveBeenCalledWith(123);
    });
});