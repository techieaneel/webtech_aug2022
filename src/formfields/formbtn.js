// function Formbtn(props){
//     return(
//         <button 
//         id={props.idText} 
//         disabled = {props.isDisabled == "true" ? "disabled" : ""}
//         >            
//             {props.btnText}
//         </button>
//     );
// }
// export default Formbtn;

function Formbtn({idText, isDisabled, btnText}){
    return(
        <button 
        id={idText} 
        disabled = {isDisabled == "true" ? "disabled" : ""}
        >            
            {btnText}
        </button>
    );
}
export default Formbtn;