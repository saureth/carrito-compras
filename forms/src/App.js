import { useState } from "react"

const App = () => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            {value.length < 5 ? <span> longitud mínima de 5 </span> : null}
            <input type='text' name='normal' value={value} onChange={handleChange} />
        </div>
    );
}

export default App;