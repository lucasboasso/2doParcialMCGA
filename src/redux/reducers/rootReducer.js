import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    products: productReducer,
    modal: modalReducer
})

export default rootReducer;