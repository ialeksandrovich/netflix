import React from 'react';
import reactTestRenderer from 'react-test-renderer';
import { Button } from '../Button';

const onClick = jest.fn();
let props;

describe('MovieItem component', () => {
    beforeEach(() => {
        props = {
            caption: 'Caption',
            size: 'big',
            color: 'red',
            style: 'round',
            onClick: onClick,
            active: true,
        };
    });

    it('Button should be rendered correctly', () => {
        const tree = reactTestRenderer.create(
            <Button {...props}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Button should call onClick after it was clicked', () => {
        const button = shallow(<Button {...props} />);

        button.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});