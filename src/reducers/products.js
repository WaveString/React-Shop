import {
    FETCH_PRODUCTS_SUCCESS,
} from '../actions/products';

export const initialState = {
    list: []
};

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products
            };
        default:
            return state;
    }
}
