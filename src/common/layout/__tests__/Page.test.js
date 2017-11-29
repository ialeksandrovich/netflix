import React from 'react';
import renderer from 'react-test-renderer';
import { Page } from '../Page';

describe('Page component', () => {

    it('Page should be rendered properly', () => {
        const tree = renderer.create(
            <Page>children</Page>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});