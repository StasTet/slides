import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import login from './login';

export default combineReducers({
    users,
    login,
    form: formReducer
});
