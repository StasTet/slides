import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Row, Col } from 'reactstrap';
import { Header } from './Header';
import { SlidesList } from './SlidesList';
import { Main } from './Main';
import '../styles/global.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid main-layout">
                <Row>
                    <Col className="header">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <SlidesList width={2} />
                    <Main width={10}/>
                </Row>
            </div>
        );
    }
}

export default hot(module)(App);
