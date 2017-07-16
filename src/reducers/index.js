import { combineReducers } from 'redux';
import { productsReducer as products } from './products';
import { loginFormReducer as loginForm } from './loginForm';
import { userReducer as user } from './user';

const rootReducer = combineReducers({
    user,
    products,
    loginForm
});

export default rootReducer;
