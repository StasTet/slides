// export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUsersSuccess = (payload) => {
    return {
        type: GET_USER_SUCCESS,
        payload
    };
};

export const getUsersFailure = (payload) => {
    return {
        type: GET_USER_FAILURE,
        payload
    };
};
