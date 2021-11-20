import { SHOW_MODAL, CLOSE_MODAL } from '../../constants/actionTypes'

export const showModal = (modalType, meta = {}) => {
    return {
        type: SHOW_MODAL,
        modalType,
        meta
    };
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
}