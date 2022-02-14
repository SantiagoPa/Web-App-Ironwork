import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { uiReducer } from './uiReducer';
import { productsReducer } from './productsReducer';
import { customersReducer } from './customersReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    ui: uiReducer,
    product: productsReducer,
    customer: customersReducer,
});

