import logo from './logo.svg';
import './App.css';

function App() {

  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    
  }
  return (
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input name='campo'/>
      </div>
      <input name='campo-2'/>
      <input type='submit' value ='Enviar'/> 
    </form>
  );
}

export default App;
