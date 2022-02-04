import './App.css';
import {useRef} from 'react';

const App = () => {

  const input = useRef();
  const file = useRef();

  const submit = () => {
    const form = new FormData();
    form.append('texto', input.current.value);
    form.append('archivo', file.current.files[0]);
    fetch('/lala', {method: 'POST', body: form} )
  }

  return (
    <div>
      <div>
        <span> lala </span>
        <input name='campo'/>
      </div>
      <input name='campo-2'/>
      <input type='file' name='archivo' />
      <input type='submit' value='Enviar'/> 
    </div>
  );
}

export default App;
