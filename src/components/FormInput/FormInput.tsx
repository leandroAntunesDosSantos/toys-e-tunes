import './FormInput.css'

export default function FormInput({label, ...props}: {label: string, id: string, name: string, placeholder: string, type: string}) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{label}</label>
            <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}