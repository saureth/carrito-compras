import {useState} from 'react';

// reglas: 
// hooks no se llaman en loops, siempre al inicio del componente y al nivel más alto de la función
// solo se llaman en componentes de react o custom hooks

/*class App extends Component {
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
}*/

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1);
    }
    return [contador, incrementar];
}

const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}> Incrementar </button>
        </div>
    );
}

export default App;