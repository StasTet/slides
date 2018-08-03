import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../../src/actions/login';

const initialState = {
    user: null,
    isLogin: false,
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLogin: true
            };

        case LOGIN_FAIL:
            return state;

        case LOGOUT:
            return state;

        default:
            return state;
    }
};

export default login;
