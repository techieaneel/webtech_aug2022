export default function NewChild(props){

    return(
        <input type="text" onChange={x=>props.getUserInputProp(x.target.value)}/>
    )
}