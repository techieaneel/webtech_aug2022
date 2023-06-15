// import React from 'react';
// import { useState } from 'react';
import React, {useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Footer from './components/footer';
import Login from './components/login';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <Login/>
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
