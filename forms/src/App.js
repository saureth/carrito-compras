import { useState } from "react"

const App = () => {

    const [value, setValue] = useState({ normal: 'por defecto', texto: ''});

    const handleChange = (e) => {
        setValue( (state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div>
            {value.length < 5 ? <span> longitud mínima de 5 </span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange} />
            <textarea name='texto' onChange={handleChange} value={value.texto} />
        </div>
    );
}

export default App;