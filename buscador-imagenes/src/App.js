import {Formik, Form, Field} from 'formik';
import { useState } from 'react';
import './css/header.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log({photos});
  return (
    <div>
      <header>
        <Formik 
          initialValues={{search:''}}
          onSubmit={async values => {
            //llamado api
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
              headers: {
                'Authorization': 'Client-ID YLeNTIjnPO6z3_WR9nMYmkiS4lzota9JknRQoC9lM6E'
              }
            });
            const data = await response.json();
            setPhotos(data.results);
          }
        }>
          <Form>
            <Field name='search'/>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
