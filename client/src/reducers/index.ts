import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import authReducer from "./authReducer"
import headerReducer from "./headerReducer";
import loadingReducer from "./loadingReducer";
import shopReducer from "./shopReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    header: headerReducer,
    loading: loadingReducer,
    shop: shopReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store