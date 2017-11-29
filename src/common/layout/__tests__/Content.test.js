import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from '../Content';

describe('Content component', () => {

    it('Content should be rendered properly', () => {
        const tree = renderer.create(
            <Content>children</Content>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});