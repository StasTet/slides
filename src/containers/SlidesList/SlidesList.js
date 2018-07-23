import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import './slidesList.scss';

export class SlidesList extends Component {
    render() {
        const { width } = this.props;

        return (
            <Col xs={width} className="slider-list">
                <div className="slider-list__inner">
                    SlidesList
                </div>
            </Col>
        );
    }
}

SlidesList.defaultProps  = {
    width: 2
};

SlidesList.propTypes = {
    width: PropTypes.number.isRequired
};
