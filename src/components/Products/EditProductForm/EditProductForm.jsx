import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { putProduct as putProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { Form, Field } from "react-final-form"
import { required } from "../../../utils/validations"


const EditProductForm = ({
    putProduct,
    closeModal,
    product
}) => {
        const onUpdateProduct = (values) => {
            console.log(values);
            putProduct({...values, id: product._id })
            closeModal();
        }
        return (
            <div>
                <Form
                    onSubmit={onUpdateProduct}
                    initialValues={{codigo: product.codigo, nombre: product.nombre, marca: product.marca,
                    precio: product.precio, descripcion: product.descripcion, stock: product.stock}}
                    render={({handleSubmit, form, values, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="codigo" component="input" placeholder="Codigo" label="Codigo:" validate={required} />
                        </div>
                        <div>
                            <Field name="nombre" component="input" placeholder="Nombre del producto" label="Nombre:" />
                        </div>
                        <div>
                            <Field name="marca" component="input" placeholder="Marca del producto" label="Marca:" />
                        </div>
                        <div>
                            <Field name="precio" component="input" placeholder="Precio" label="Precio:" />
                        </div>
                        <div>
                            <Field name="descripcion" component="input" placeholder="Descripcion" label="Descripcion:" />
                        </div>
                        <div>
                            <Field name="stock" component="input" placeholder="Stock" label="Stock:" />
                        </div>
                        <button type="submit" disabled={submitting || pristine}>Cargar</button>
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