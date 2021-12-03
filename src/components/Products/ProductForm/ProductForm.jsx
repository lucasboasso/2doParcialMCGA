import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addProduct as addProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { Form, Field } from "react-final-form"
import { required } from "../../../utils/validations"
import Button from "react-bootstrap/Button"
import styles from "./ProductForm.module.css"

const ProductForm = ({addProduct, closeModal}) => {
    const onSubmitProduct = (values) => {
        addProduct(values)
        closeModal();
    }

    return (
        <div className={styles.container}>
            <Form onSubmit={onSubmitProduct}>
                {({handleSubmit, values, submitting, pristine }) => 
                <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.title}>Agregar Producto</div>
                <div>
                    <label>Codigo:</label>
                    <Field name="codigo" component="input" placeholder="Codigo" label="Codigo:" validate={required} />
                </div>
                <div>
                    <label>Nombre:</label>
                    <Field name="nombre" component="input" placeholder="Nombre del producto" label="Nombre:" />
                </div>
                <div>
                    <label>Marca:</label>
                    <Field name="marca" component="input" placeholder="Marca del producto" label="Marca:" />
                </div>
                <div>
                    <label>Precio:</label>
                    <Field name="precio" component="input" placeholder="Precio" label="Precio:" />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <Field name="descripcion" component="textarea" placeholder="Descripcion" label="Descripcion:" />
                </div>
                <div>
                    <label>Stock:</label>
                    <Field name="stock" component="input" placeholder="Stock" label="Stock:" />
                </div>
                <div className={styles.buttonsContainer}>                
                <Button variant="primary" onClick={() => closeModal() }>Cancelar</Button>
                <Button variant="success" type="submit" disabled={submitting || pristine}>Cargar</Button>
                </div>
            </form>}
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addProduct: addProductAction,
        closeModal: closeModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProductForm)