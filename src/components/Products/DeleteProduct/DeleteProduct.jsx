import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteProduct as deleteProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";

const DeleteProduct = ({
    closeModal,
    deleteProduct,
    productId
}) => {
    const onDeleteProduct = () => {
        deleteProduct(productId);
        closeModal();
    }

    return (
        <div>
            ¿Estas seguro que deseas eliminar el producto?
            <div>
                <button onClick={() => closeModal() }>Cancelar</button>
                <button onClick={() => onDeleteProduct() }>ELIMINAR</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteProduct: deleteProductAction,
        closeModal: closeModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(DeleteProduct)