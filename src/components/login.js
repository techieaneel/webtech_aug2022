import axios from "axios";
/* import React, {useState} from 'react';

function Login(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    console.log("username: ", username);
    console.log("password: ", password);

    return(
        <div className="login">
            <div className="formrow">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter Username" 
                    autoComplete="off"
                    onChange={e => setUsername(e.target.value)}
                    />
            </div>
            
            <div className="formrow">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                autoComplete="off"
                onChange={e=> setPassword(e.target.value)}
                />
            </div>
            
            <div className="formrow">
                <button>Login</button>
            </div>
        </div>
    );
}
export default Login;
*/

/* 


import React, {useState} from 'react';

function Login(){

    let [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    console.log("userData: ", userData);

    let usernameHandler = (e) => {
        setUserData({
            ...userData, username : e.target.value
        })
    }    
    let passwordHandler = (e) => {
        setUserData({
            ...userData, password : e.target.value
        })
    }

    return(
        <div className="login">
            <div className="formrow">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter Username" 
                    autoComplete="off"
                    name="username"
                    // onChange={e => setUsername(e.target.value)}
                    // onChange={e => loginHandler(e)}
                    onChange={e => usernameHandler(e)}
                    />
            </div>
            
            <div className="formrow">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                autoComplete="off"
                name="password"
                // onChange={e=> setPassword(e.target.value)}
                // onChange={e => loginHandler(e)}
                onChange={e => passwordHandler(e)}
                />
            </div>
            
            <div className="formrow">
                <button>Login</button>
            </div>
        </div>
    );
}
export default Login;

*/
/*
import React, {useState} from 'react';

function Login(){

    let [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    console.log("userData: ", userData);

    let loginHandler = (e) => {
        // console.log("event: ", e);
        // console.log("event.target: ", e.target);
        // console.log("event.target.name: ", e.target.name);
        // console.log("event.target.value: ", e.target.value);
        setUserData({
            ...userData, [e.target.name] : e.target.value
        })
    }

    return(
        <div className="login">
            <div className="formrow">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter Username" 
                    autoComplete="off"
                    name="username"
                    // onChange={e => setUsername(e.target.value)}
                    onChange={e => loginHandler(e)}
                    />
            </div>
            
            <div className="formrow">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                autoComplete="off"
                name="password"
                // onChange={e=> setPassword(e.target.value)}
                onChange={e => loginHandler(e)}
                />
            </div>
            
            <div className="formrow">
                <button>Login</button>
            </div>
        </div>
    );
}
export default Login;
*/

function Login(){

    let token = localStorage.getItem("token");    
    let config = {headers: { Authorization: `Bearer ${token}`}}
    token = config;

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post(
            "https://dummyjson.com/auth/login", {
            username: 'kminchelle',
            password: '0lelplR'}
        ).then(
            res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.token);
                localStorage.setItem("token", res.data.token);
                alert("Login Successful...");
            }
        ).catch(
            err => console.log(err)
        );
    }

    const getAuthDetailsHandler = (e) => {
        e.preventDefault();
        axios.get(
            "https://dummyjson.com/auth/products/1",token
        ).then(
            res=> console.log(res)
        ).catch(
            err=> console.log(err)
        );
    }

    return(
        <div className="login">
            Login Form Here with email and password..

            <button onClick={e=> loginHandler(e)}>Login</button>
            <br/>
            <button onClick={e=>getAuthDetailsHandler(e)}>Get Details</button>
        </div>
    )
}
export default Login;
