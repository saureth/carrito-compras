import { useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => console.log(values)
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input 
        name='name' type='text' onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Apellido</label>
      <input 
        name='lastName' type='text' onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label>Correo</label>
      <input 
        name='email' type='email' onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type= 'submit' > Enviar </button>
    </form>
  );
}

export default App;
