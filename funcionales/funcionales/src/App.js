import {useState, Component} from 'react';

// reglas: 
// hooks no se llaman en loops, siempre al inicio del componente y al nivel más alto de la función
// solo se llaman en componentes de react o custom hooks

class App extends Component {
    state = { contador: 0}

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1})
    }
    render() {
        return (
            <div>
                contador: {this.state.contador}
                <button onClick={this.incrementar}> Incrementar </button>
            </div>
        );
    }
}
/*
const App = () => {
    const [contador, setContador] = useState(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={()=>setContador(contador + 1)}> Incrementar </button>
        </div>
    );
}*/

export default App;