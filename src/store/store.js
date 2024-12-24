import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from 'redux-thunk'
import { reducerProducts } from "../reducers/products/reducerProducts";

let reducers = combineReducers({
    products:reducerProducts
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store