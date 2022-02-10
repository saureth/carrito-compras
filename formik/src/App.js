import { useFormik } from 'formik';

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
    errors.name = 'Requerido'
  } else if (values.email.length < 5) {
    errors.email = 'Nombre muy corto';
  }
  return errors;
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <br />
      <label>Correo</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type='submit' > Enviar </button>
    </form>
  );
}

export default App;
