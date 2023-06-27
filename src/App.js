import React, {useEffect, useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Studentslist from './components/studentslist';

function App() {
    return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <Studentslist/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;