import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import isEmpty from 'lodash/isEmpty';
import security from '../../thunks/security';
import { renderField } from '../../utils';

const mapDispatchToProps = (dispatch) => ({
    login: (credentials, resolve, reject) => dispatch(security.login(credentials, resolve, reject))
});

class Login extends Component {
    submit = (values) => {
        const errors = {};

        if (!values.login) {
            errors.login = 'Обязательное поле';
        }
        if (!values.password) {
            errors.password = 'Обязательное поле';
        }
    
        if (!isEmpty(errors)) {
            throw new SubmissionError(errors);
        }
    
        return new Promise((resolve, reject) => {
            this.props.login(values, resolve, reject);
        });
    }

    render() {
        const { error, handleSubmit } = this.props;

        return (
            <div className="header-container">
                <Row>
                    <Col xs={12}>
                        <Form onSubmit={handleSubmit(this.submit)}>
                            <Field name="login" type="text" component={renderField} label="Логин" />
                            <Field name="password" type="text" component={renderField} label="Пароль" />
                            {error && <span>{error}</span>}
                            <Button type="submit" color="primary">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func
};
  
export default reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));
