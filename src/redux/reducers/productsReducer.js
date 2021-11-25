import {
    GET_PRODUCTS_FETCHING,
    GET_PRODUCTS_FULFILLED,
    GET_PRODUCTS_REJECTED,
    ADD_PRODUCTS_FETCHING,
    ADD_PRODUCTS_FULFILLED,
    ADD_PRODUCTS_REJECTED,
    DELETE_PRODUCTS_FETCHING,
    DELETE_PRODUCTS_FULFILLED,
    DELETE_PRODUCTS_REJECTED,
    UPDATE_PRODUCTS_FETCHING,
    UPDATE_PRODUCTS_FULFILLED,
    UPDATE_PRODUCTS_REJECTED,
} from "../../constants/actionTypes";

const initialState = {
    isLoading: false,
    list: [],
    error: false,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: action.payload
            };
        case GET_PRODUCTS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case ADD_PRODUCTS_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_PRODUCTS_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: [...state.list, action.payload],
            };
        case ADD_PRODUCTS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case DELETE_PRODUCTS_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_PRODUCTS_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: state.list.filter(product => product._id !== action.payload)
            };
        case DELETE_PRODUCTS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case UPDATE_PRODUCTS_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_PRODUCTS_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: [...state.list, action.payload],
            };
        case UPDATE_PRODUCTS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default productReducer;