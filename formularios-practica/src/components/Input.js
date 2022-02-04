import './Input.css'

const Input = ( {label, ...rest}) => {
    return (
        <div class='field'>
            <label>{label}</label>
            <input {...rest}/>
        </div>
        
    );
}
export default Input;