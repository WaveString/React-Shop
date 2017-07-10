import { combineReducers } from 'redux';
import { productsReducer as products } from './products';

const rootReducer = combineReducers({
    products
});

export default rootReducer;
