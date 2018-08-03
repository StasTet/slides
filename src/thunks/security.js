import { SubmissionError } from 'redux-form';
import { loginSuccess, loginFail, logout } from '../../src/actions/login';
import security from '../api/security';

const login = (credentials, resolve, reject) =>
    (dispatch) => {
        security.login(credentials)
            .then((response) => {
                console.log(response)
                dispatch(loginSuccess(response.data));
                // dispatch(routes.goToMain());
            })
            .catch((error) => reject(new SubmissionError({ _error: error.response.data.message })));
    };

export default {
    login
};
