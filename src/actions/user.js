import * as API from '../services/api';
import { redirectTo } from './router';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export function loginUser(data) {
    return (dispatch) => {
        return API.loginUser(data)
        .then(res => res.json().then(body => ({
            status: res.status,
            body
        })))
        .then(({ status, body }) => {
            if (status !== 200) {
                dispatch(loginUserError(body));
                return;
            }
            dispatch(loginUserSuccess(body));
            dispatch(redirectTo('/'));
        })
        .catch((error) => dispatch(loginUserError(error)));
    };
}


function loginUserSuccess({ token, user }) {
    return {
        type: LOGIN_USER_SUCCESS,
        token,
        user
    };
}

function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        error: error.message
    };
}
