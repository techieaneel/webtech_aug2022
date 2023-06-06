function Formlabel(props){
    console.log(props);
    return(
        <label htmlFor={props.forText}>{props.labelText}</label>
    );
}

export default Formlabel;