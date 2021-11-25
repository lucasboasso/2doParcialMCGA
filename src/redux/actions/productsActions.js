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

//const URL = "http://localhost:3030/api/productos"
const URL = "https://primerparcialmcga.herokuapp.com/api/productos"

const getProductsFetching = () => ({
    type: GET_PRODUCTS_FETCHING,
});

const getProductsFulfilled = (payload) => ({
    type: GET_PRODUCTS_FULFILLED,
    payload,
});

const getProductsRejected = () => ({
    type: GET_PRODUCTS_REJECTED,
});

export const getProducts = () => (dispatch) => {
    dispatch(getProductsFetching());
    return fetch(URL)
        .then((data) => data.json())
        .then((response) => {
            dispatch(getProductsFulfilled(response));
        })
        .catch(() => {
            dispatch(getProductsRejected());
        });
};

const addProductsFetching = () => ({
    type: ADD_PRODUCTS_FETCHING,
});

const addProductsFulfilled = (payload) => ({
    type: ADD_PRODUCTS_FULFILLED,
    payload,
});

const addProductsRejected = () => ({
    type: ADD_PRODUCTS_REJECTED,
});

export const addProduct = (product) => (dispatch) => {
    dispatch(addProductsFetching());
    return fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    })
        .then((data) => data.json())
        .then((response) => {
            dispatch(addProductsFulfilled(response))
        })
        .catch(() => {
            dispatch(addProductsRejected())
        });
};
