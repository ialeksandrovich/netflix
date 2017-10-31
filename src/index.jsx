import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { MainPage } from './pages/main/MainPage';
import { DetailsPage } from './pages/details/DetailsPage';

ReactDom.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={ MainPage } />
                <Route path="/search" component={ MainPage } />
                <Route path="/film" component={ DetailsPage } />
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));
