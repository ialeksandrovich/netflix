import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

let props;

describe('Header component', () => {
    beforeEach(() => {
        props = {
            rightItems: [<div key="111">Right Item</div>],
        };
    });

    it('Header should be rendered properly', () => {
        const tree = renderer.create(
            <Header { ...props }>children</Header>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});