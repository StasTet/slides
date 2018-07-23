import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import './main.scss';

export class Main extends Component {
    render() {
        return (
            <Col xs={10} className="main">
                <div className="main__inner">
                    Main
                </div>
            </Col>
        );
    }
}

Main.defaultProps  = {
    width: 10
};

Main.propTypes = {
    width: PropTypes.number.isRequired
};
