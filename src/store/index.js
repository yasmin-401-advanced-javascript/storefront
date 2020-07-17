import {createStore , combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Categories from './reducers/categories';
import Products from './reducers/products';
import Cart from './reducers/cart';
const rootReducer = combineReducers({Categories , Products , Cart});
const store = ()=>{
    return createStore(rootReducer , composeWithDevTools());
}
export default store();