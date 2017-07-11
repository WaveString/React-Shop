import * as API from '../services/api';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const ADD_IN_BASKET = 'ADD_IN_BASKET';

export function fetchProducts() {
    return (dispatch) => {
        return API.fetchProducts()
            .then(res => res.json())
            .then(body => {
                dispatch(fetchProductsSuccess(body));
            })
            .catch((error) => dispatch(fetchProductsError(error)));
    };
}

function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products
    };
}

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error
    };
}

export function addInBasket(product) {
    return {
        type: ADD_IN_BASKET,
        product
    };
}

export function uploadImage(id, file) {
    return (dispatch) => {
        const data = new FormData();
        data.append('image', file);

        return API.uploadImage(data)
            .then(res => res.json())
            .then(body => {
                const { imageUrl } = body;
                dispatch(uploadImageSuccess(id, imageUrl));
            })
            .catch(() => dispatch(uploadImageError()));
    };
}

function uploadImageSuccess(id, imageUrl) {
    return {
        type: UPLOAD_IMAGE_SUCCESS,
        id,
        imageUrl
    };
}

function uploadImageError() {
    return {
        type: UPLOAD_IMAGE_ERROR
    };
}
