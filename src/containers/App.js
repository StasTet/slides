import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Header } from './Header';
import { SlidesList } from './SlidesList';
import { Main } from './Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SlidesList />
                <Main />
            </div>
        );
    }
}

export default hot(module)(App);
