import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { MAIN, LOGIN } from '../../constants/routs';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Row>
                    <Col xs={12}>
                    <ul>
                        <li><Link to={MAIN}>Main</Link></li>
                        <li><Link to={LOGIN}>Login</Link></li>
                    </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

// export default Header;
// export default withRouter(connect(mapStateToProps)(Header));
export default Header;
