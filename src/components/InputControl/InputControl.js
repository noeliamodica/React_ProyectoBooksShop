import "./InputControl.css";

export function InputControl(props){
    return(
        <div className="container-input">
        {props.label && <label className="container-label">{props.label}</label>}
        <input type="text" {...props}></input>

        </div>
    )
}