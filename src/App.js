// import React from 'react';
// import { useState } from 'react';
import React, {useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Students from './components/students';
import Sidebar from './components/sidebar';
import Cities from './components/cities';
import Footer from './components/footer';

function App() {

  // let comName = "OKSoft Solutions";
  // let [comName, setComName] = React.useState("OKSoft Solutions");
  let [comInputName, setComInputName] = useState("");
  let [comName, setComName] = useState("OKSoft Solutions");

  // const saveCompany = () => {
  //   setComName(comInputName);
  // }

  function saveCompany(){
    setComName(comInputName);
  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <Sidebar/>
          <Students/>
          <Cities/>
        </div>
        <br/>
        <br/>
        {/* <input
          type="text" 
          className='comInput' 
          id="comInput" 
          placeholder="Enter Company Name"
          onChange={e => setComName(e.target.value)}
        /> */}

        <input
          type="text" 
          className='comInput' 
          id="comInput" 
          placeholder="Enter Company Name"
          onChange={e => setComInputName(e.target.value)}
        />
        <button onClick={saveCompany}>Save</button>
        <br/>
        <br/>
        <Footer companyName={comName}/>
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
