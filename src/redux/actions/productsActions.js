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

const deleteProductsFetching = () => ({
    type: DELETE_PRODUCTS_FETCHING,
});

const deleteProductsFulfilled = (payload) => ({
    type: DELETE_PRODUCTS_FULFILLED,
    payload,
});

const deleteProductsRejected = () => ({
    type: DELETE_PRODUCTS_REJECTED,
});

export const deleteProduct = (id) => (dispatch) => {
    dispatch(deleteProductsFetching());
    return fetch(`${URL}/${id}`, {method: 'DELETE'})
        .then((data) => data.json())
        .then(() => {
            dispatch(deleteProductsFulfilled(id));
        })
        .catch(() => {
            dispatch(deleteProductsRejected());
        })
}

const updateProductsFetching = () => ({
    type: UPDATE_PRODUCTS_FETCHING,
});

const updateProductsFulfilled = (payload) => ({
    type: UPDATE_PRODUCTS_FULFILLED,
    payload,
});

const updateProductsRejected = () => ({
    type: UPDATE_PRODUCTS_REJECTED,
});

export const putProduct = (product) => (dispatch) => {
    dispatch(updateProductsFetching());
    return fetch(`${URL}/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    })
        .then((data) => data.json())
        .then((response) => {
            dispatch(updateProductsFulfilled(response));
        })
        .catch(() => {
            dispatch(updateProductsRejected());
        })
}