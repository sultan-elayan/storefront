

import {createStore, combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import product from './data'
import cart from './cart'
import thunk from "redux-thunk";

let reducers = combineReducers({
    product:product,
    cart:cart
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();