import React from 'react';
import css from './Page.less';

export const Page = (props) => {
    return (
        <div className={ css.page }>
            { props.children }
        </div>
    )
}
