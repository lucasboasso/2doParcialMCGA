import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { putProduct as putProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { Form, Field } from "react-final-form"
import { required } from "../../../utils/validations"
import Button from "react-bootstrap/Button"
import styles from "./EditProductForm.module.css"


const EditProductForm = ({
    putProduct,
    closeModal,
    product
}) => {
        const onUpdateProduct = (values) => {
            putProduct({...values, id: product._id })
            closeModal();
        }
        return (
            <div className={styles.wrapper}>                
                <Form
                    onSubmit={onUpdateProduct}
                    initialValues={{codigo: product.codigo, nombre: product.nombre, marca: product.marca,
                    precio: product.precio, descripcion: product.descripcion, stock: product.stock}}
                    render={({handleSubmit, form, values, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.title}>Editar Producto</div>
                        <div>
                            <label>Codigo: </label>
                            <Field name="codigo" component="input" placeholder="Codigo" label="Codigo:" validate={required} />
                        </div>
                        <div>
                        <label>Nombre: </label>
                            <Field name="nombre" component="input" placeholder="Nombre del producto" label="Nombre:" />
                        </div>
                        <div>
                            <label>Marca: </label>
                            <Field name="marca" component="input" placeholder="Marca del producto" label="Marca:" />
                        </div>
                        <div>
                            <label>Precio: </label>
                            <Field name="precio" component="input" placeholder="Precio" label="Precio:" />
                        </div>
                        <div>
                            <label>Descripcion: </label>
                            <Field name="descripcion" component="textarea" placeholder="Descripcion" label="Descripcion:" />
                        </div>
                        <div>
                            <label>Stock: </label>
                            <Field name="stock" component="input" placeholder="Stock" label="Stock:" />
                        </div>
                        <Button variant="primary" type="submit" disabled={submitting || pristine}>Editar</Button>
                        <Button onClick={() => closeModal() }>Cancelar</Button>
                    </form>
                )}
            />
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        putProduct: putProductAction,
        closeModal: closeModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(EditProductForm)