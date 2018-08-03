import { getUsersSuccess, getUsersFailure } from '../../src/actions/users';
import users from '../api/user';

const getUsers = () =>
    (dispatch) => {
        users.getUsers()
            .then((response) => dispatch(getUsersSuccess(response.data)))
            .catch((error) => dispatch(getUsersFailure(response.error)));
    };

export default {
    getUsers
};
