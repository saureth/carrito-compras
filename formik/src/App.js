import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        console.log(values);
        errors.name = 'Requerido'
    } else if (values.name.length < 5) {
        errors.name = 'Nombre muy corto';
    }
    if (!values.lastName) {
        errors.lastName = 'Requerido'
    } else if (values.lastName.length < 5) {
        errors.lastName = 'Apellido muy corto';
    }
    if (!values.email) {
        errors.email = 'Requerido'
    } else if (values.email.length < 5) {
        errors.email = 'Correo muy corto';
    }
    return errors;
}

function App() {
    return (
        <Formik
            initialValues={{ name: '', lastName: '', email: '' }}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <Form>
                <label>Nombre</label>
                <Field name='name' type='text' className='input' />
                <Field name='select' as='select' className='input'>
                    <option value='feliz'>Feliz</option>
                </Field>
                <ErrorMessage name='name' />
                <br />
                <label>Apellido</label>
                <Field name='lastName' type='text' />
                <ErrorMessage name='lastName' />
                <br />
                <label>Correo</label>
                <Field name='email' type='email' />
                <ErrorMessage name='email' />
                <button type='submit' > Enviar </button>
            </Form>
        </Formik>
    );
}

export default App;
