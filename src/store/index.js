import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import product from './data'
import cart from './cart'

let reducers = combineReducers({
    product:product,
    cart:cart
});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();