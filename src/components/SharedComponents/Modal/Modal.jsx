import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../constants/modalTypes";
import Modal from 'react-bootstrap/Modal'

import ProductForm from "../../../components/Products/ProductForm/ProductForm"
import DeleteProduct from "../../../components/Products/DeleteProduct/DeleteProduct"
import EditProductForm from "../../../components/Products/EditProductForm/EditProductForm"

const Modal = ({
    show,
    modalType,
    meta,
    closeModal,
}) => {

    let modalComponent;
    switch (modalType) {
        case modalTypes.ADD_PRODUCT:
            modalComponent = <ProductForm />
            break;
        case modalTypes.DELETE_PRODUCT:
            modalComponent = <DeleteProduct productId={meta.id} />
            break;
        case modalTypes.UPDATE_PRODUCT:
            modalComponent = <EditProductForm product={meta.product} />
        default:
            modalComponent = null;
            break;
    }

    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Body>
                <div>
                    {modalComponent}
                </div>
            </Modal.Body>
        </Modal>
    )

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