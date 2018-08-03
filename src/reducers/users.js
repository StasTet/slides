import { GET_USER_SUCCESS } from '../../src/actions/users';

const initialState = {
    data: null,
    isFetching: false
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
};

export default users;
