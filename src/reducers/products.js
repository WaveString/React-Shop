import {
    FETCH_PRODUCTS_SUCCESS,
    ADD_IN_BASKET
} from '../actions/products';

export const initialState = {
    list: [],
    basket: []
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products
            };
        case ADD_IN_BASKET:
            return {
                ...state,
                basket: [ ...state.basket, action.product ]
            };
        default:
            return state;
    }
};
