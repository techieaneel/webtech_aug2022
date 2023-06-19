// const Child = () => {
    // return(
    //     <h1></h1>
    // )
// }
// export default Child

// function Child(){
//     return(
//         <h1></h1>
//     )
// }
// export default Child;

export default function Child(props){
    // let user = props.username;
    return(
        <div>
            <h1>Hello <small>{props.username}</small></h1>
            {/* <button onClick={x=> props.setSendUserProp("Sai")}>Change Name in Parent</button> */}
            <input type="text" onChange={e=>props.setUserProp(e.target.value)}/>
            <br/>
            <button onClick={x=>props.setSendUserProp(props.userProp)}>Change Name</button>

        </div>
    )
}

// State Lifting