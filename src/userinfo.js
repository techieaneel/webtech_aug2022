import Usertable from "./usertable";

export default function Userinfo(props){
    return(
        <div className="userinfo">
            <Usertable userText={props.userInfo}/>
        </div>
    );
}
