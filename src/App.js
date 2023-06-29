import React, {useEffect, useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
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