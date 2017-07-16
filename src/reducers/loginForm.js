import {
    LOGIN_USER_ERROR
} from '../actions/user';

export const initialState = {
    login: null,
    password: null,
    error: null
};

export const loginFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
