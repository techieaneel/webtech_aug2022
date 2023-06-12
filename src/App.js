import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Students from './components/students';

function App() {

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <Students/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;