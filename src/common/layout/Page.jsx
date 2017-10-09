import React from 'react';
import * as css from './Page.less';
import { Header } from './Header';
import { Footer } from './Footer';

export class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <Header rightItems={ [<div>sdfsdf</div>, <div>sdfs</div>] }/>
                <div>{ this.props.children }</div>
                <Footer/>
            </div>
        )
    }
}
