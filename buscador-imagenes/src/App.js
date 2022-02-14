import {Formik, Form, Field} from 'formik';
import { useState } from 'react';
import './css/header.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log({photos});
  const open = (url) => {
    window.open(url);
  };
  return (
    <>
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
      <div className='container'>
        <div className='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={()=>open(photo.links.html)}>
              <img src={photo.urls.regular}/>
              <p> {[photo.description, photo.alt_description].join(' - ')} </p>
            </article>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
