import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../constants/modalTypes";

import ProductForm from "../../../components/Products/ProductForm/ProductForm"
import EditProductForm from "../../../components/Products/EditProductForm/EditProductForm"

const Modal = ({
    show,
    modalType,
    meta,
    closeModal,
}) => {

    let modalComponent;
    switch (modalType) {
        case modalType.ADD_PRODUCT:
            modalComponent = <ProductForm />
            break;
        case modalType.DELETE_PRODUCT:
            modalComponent = <DeleteProductMsg productId={meta.id} />
            break;
        case modalType.UPDATE_PRODUCT:
            modalComponent = <EditProductForm product={meta.product} />
        default:
            modalComponent = null;
            break;
    }

}

const mapStateToProps = (state) => {
    return {
        show: state.modal.show,
        modalType: state.modal.modalType,
        meta: state.modal.meta
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeModal: closeModalAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);