import { combineReducers } from 'redux';
import logReducer from './logReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    log: logReducer,
    order: orderReducer
});
