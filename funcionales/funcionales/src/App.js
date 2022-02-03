import { useRef } from "react";

const App = () => {
    const ref = useRef();
    const inputRef = useRef();
    const click = ()=>{
        ref.current.innerHTML = 'Chancho';
    }
    const focus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>focus</button>
            <div onClick={click} ref={ref}>lala </div>
        </div>
    );
}

export default App;