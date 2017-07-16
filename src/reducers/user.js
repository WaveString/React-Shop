import {
    LOGIN_USER_SUCCESS
} from '../actions/user';

export const initialState = {
    data: {},
    token: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                data: action.user,
                token: action.token
            };
        default:
            return state;
    }
};
