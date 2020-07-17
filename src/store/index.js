import {createStore , combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Categories from './reducers/categories';
import Products from './reducers/products';
const rootReducer = combineReducers({Categories , Products});
const store = ()=>{
    return createStore(rootReducer , composeWithDevTools());
}
export default store();