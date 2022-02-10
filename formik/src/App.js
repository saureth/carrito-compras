import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import TextInput from './components/TextInput';
import Select from './components/Select';

const validate = (values) => {
    const errors = {}
    if (!values.name) {
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
            initialValues={{ name: '', lastName: '', email: '', chancho:'' }}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <Form>
                <TextInput name='name' label='Nombre' />
                <br />
                <TextInput name='lastName' label='Apellido' />
                <br />
                <TextInput name='email' label='Correo' />
                <Select label='Tipo de Chancho' name='chancho'>
                    <option value=''> Seleccione chancho </option>
                    <option value='felipe'> Felipe </option>
                    <option value='chanchitoFeliz'> Chanchito Feliz </option>
                    <option value='chanchitoTriste'> Chanchito Triste </option>
                </Select>
                <Checkbox name='accept'> Aceptar términos y condiciones </Checkbox>
                <button type='submit' > Enviar </button>
            </Form>
        </Formik>
    );
}

export default App;
