import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../constants/modalTypes";

const Modal = ({
    show,
    modalType,
    meta,
    closeModal,
}) => {

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