import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { uiReducer } from './uiReducer';
import { productsReducer } from './productsReducer';
import { customersReducer } from './customersReducer';
import { providersReducer } from './providersReducer';
import { transactionReducer } from './transactionReducer';
import { analyticReducer } from './analyticReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    ui: uiReducer,
    product: productsReducer,
    customer: customersReducer,
    provider: providersReducer,
    transaction: transactionReducer,
    analytic: analyticReducer,
});

