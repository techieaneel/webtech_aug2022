// import React from 'react';
// import { useState } from 'react';
import React, {useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import NewChild from './components/newchild';
// import Child from './components/child';
// import Footer from './components/footer';
// import Login from './components/login';

function App() {

  /* let [user, setUser] = useState();
  let [sendUser, setSendUser] = useState("Vasu"); */

  let [userInput, getUserInput] = useState("");  

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          {/* <Login/> */}
          {/* <input type="text" onChange={x=>setUser(x.target.value)}/>
          <button onClick={x=>setSendUser(user)}>Change Name</button>
        <br/> */}
          {/* <Child username={sendUser} setSendUserProp={setSendUser}/> */}
          {/* <Child userProp={user} username={sendUser} setSendUserProp={setSendUser} setUserProp={setUser}/> */}
          <NewChild getUserInputProp={getUserInput}/>
          <p>{userInput}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// By using UseState Hook. we can create State in Functional Component.
// first, we have to import useState hook 
// then we have to create state.
// let [comName, setComName] = useState("OKSoft Solutions");
// keyword [variable, setterFunction] = useState(Default Value);
