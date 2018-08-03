// export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

export const loginFail = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload
    };
};

export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload
    };
};
