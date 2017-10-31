import React from 'react';
import * as css from './Button.less';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Button = (props) => {
    return (
        <div
            className={ cx(
                css.button,
                css['size-medium'],
                css['size-' + props.size],
                css['color-' + props.color],
                css['style-' + props.style],
            ) }
            onClick={ props.onClick }>{ props.caption }
        </div>
    );
}

Button.propTypes = {
    caption: PropTypes.string,
    size: PropTypes.oneOf(['big', 'medium', 'small']),
    color: PropTypes.oneOf(['light-gray', 'red', 'dark-gray']),
    onClick: PropTypes.func,
    style: PropTypes.oneOf(['round', 'inline']),
};

Button.defaultProps = {
    size: 'medium',
    color: 'light-gray',
    style: 'round',
};