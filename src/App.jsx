import React from 'react';
import * as css from './App.less';

export class App extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
};
