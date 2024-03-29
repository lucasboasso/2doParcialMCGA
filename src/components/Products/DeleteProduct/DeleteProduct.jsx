import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteProduct as deleteProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import Button from "react-bootstrap/Button";
import styles from "./DeleteProduct.module.css"
import { useAuth } from "../../Auth/AuthProvider";

const DeleteProduct = ({
    closeModal,
    deleteProduct,
    productId
}) => {
    const { getAccessToken } = useAuth();
    const onDeleteProduct = () => {
        const token = getAccessToken();
        deleteProduct(productId, token);
        closeModal();
    }

    return (
        <div className={styles.container}>
            ¿Estas seguro que deseas eliminar el producto?
            <div className={styles.buttonsContainer}>
                <Button onClick={() => closeModal() }>Cancelar</Button>
                <Button variant="danger" onClick={() => onDeleteProduct() }>ELIMINAR</Button>
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