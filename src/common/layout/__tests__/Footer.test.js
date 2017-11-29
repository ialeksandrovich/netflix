import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../Footer';

describe('Footer component', () => {

    it('Footer should be rendered properly', () => {
        const tree = renderer.create(
            <Footer/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});