import dataa from './data.js'
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({dataa});

const storee = () => {
    return createStore(reducers, composeWithDevTools())
}

export default storee();