import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Row, Col } from 'reactstrap';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from '../Header';
import Main from '../Main';
import Login from '../Login';

import { MAIN, LOGIN } from '../../constants/routs';
import users from '../../thunks/users';

import '../../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(users.getUsers())
});

const history = createBrowserHistory();

class Root extends Component {
    componentDidMount () {
        this.props.getUsers();
    }

    render() {
        return (
            <Router history={history}>
                <div className="container">
                    <Row>
                        <Col xs={12}>
                            <Header />
                        </Col>
                    </Row>

                    <Switch>
                        <Route exact path={MAIN} component={Main} />
                        <Route path={LOGIN} component={Login} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

Root.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Root));
