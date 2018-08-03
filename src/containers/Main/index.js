import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import './main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <Row>
                    <Col xs={12}>
                        Main
                    </Col>
                </Row>
            </div>
        );
    }
}

Main.defaultProps  = {
    width: 10
};

Main.propTypes = {
    width: PropTypes.number.isRequired
};

export default Main; 
