import React from 'react';
import * as css from './Header.less';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="top-panel">
                    <div className="logo">netflixroulette</div>
                    <div className="right-items-container">
                        {
                            this.props.rightItems.map(item => item)
                        }
                    </div>
                </div>
                { this.props.children }
            </div>
        )
    }
}
