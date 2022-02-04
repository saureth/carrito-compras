import { useState } from "react"

const App = () => {

    const [value, setValue] = useState({ 
        normal: 'por defecto', 
        texto: '', 
        select: '', 
        check: false,
        estado: 'feliz'
    });

    const handleChange = ({target}) => {
        setValue( (state) => ({
            ...state,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        }));
    }

    return (
        <div>
            {value.length < 5 ? <span> longitud mínima de 5 </span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange} />
            <textarea name='texto' onChange={handleChange} value={value.texto} />

            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''> -- Seleccione </option>
                <option value='chanchofeliz'> Chancho feliz </option>
                <option value='chanchitofeliz'> Chanchito feliz </option>
                <option value='chanchitotriste'> Chanchito triste </option>
                <option value='felipe'> Felipe </option>
            </select>

            <input 
                type = 'checkbox'
                name = 'check'
                onChange = {handleChange}
                checked = {value.check}
            />

            <div>
                <label>chancho</label>
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='feliz' 
                    name="estado" 
                    checked={value.estado === 'feliz'} 
                /> Feliz
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='triste' 
                    name="estado"
                    checked={value.estado === 'triste'} 
                /> Triste
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='felipe' 
                    name="estado"
                    checked={value.estado === 'felipe'} 
                /> Felipe
            </div>

        </div>
    );
}

export default App;