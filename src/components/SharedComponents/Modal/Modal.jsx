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