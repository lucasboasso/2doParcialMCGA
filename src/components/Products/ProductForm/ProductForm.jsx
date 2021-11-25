import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addProduct as addProductAction } from "../../../redux/actions/productsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { Form, Field } from "react-final-form"
import { required } from "../../../utils/validations"

const ProductForm = (props) => {
    const onSubmitProduct = (values) => {
        props.addProduct(values)
        props.closeModal();
    }

    return (
        <div>
            <Form onSubmit={onSubmitProduct}>
                {({handleSubmit, values, submitting, pristine }) => <form onSubmit={handleSubmit}>
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