import React from 'react';
import * as css from './Header.less';
import img from '../../static/header.jpg';


export const Header = (props) => {
    return (
        <div className={ css.header }>
            <div className={ css.topPanel }>
                <a href="/" className={ css.logo }>netflixroulette</a>
                {
                    props.rightItems &&
                    <div className={ css.rightItemsContainer }>{ props.rightItems.map(item => item) }</div>
                }
            </div>
            { props.children }
        </div>
    )
}
