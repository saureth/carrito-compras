import { useField } from "formik";

const Select = ({label, ...props}) => {
    const [field,meta] = useField(props);
    console.log(field);
    return (
        <div>
            <label>
                {label}
                <select {...field} {...props} />
                {meta.touched && meta.error ? <div> {meta.error} </div> : null}
            </label>
        </div>
    );
}

export default Select;