import { useReducer, useState } from "react";

const inicial = { contador: 0 };

const reducer = (state,action) => { 
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1}
            break;
        case 'reducir':
            return { contador: state.contador - 1}
            break;
        case 'set':
            return { contador: action.payload}
            break;
        default:
            return state;
            break;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, inicial);
    const [valor, setValor] = useState(0);
    return (
        <div>
            Contador: {state.contador}
            <input value={valor} onChange={e=>setValor(e.target.value)} />
            <button onClick={()=> dispatch({type: 'incrementar'})}> Más </button>
            <button onClick={()=> dispatch({type: 'reducir'})}> Menos </button>
            <button onClick={()=> dispatch({type: 'set', payload: 5})}> Set </button>
        </div>
    );
    
}

export default App;