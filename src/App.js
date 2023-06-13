import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Students from './components/students';
import Sidebar from './components/sidebar';
import Cities from './components/cities';

function App() {

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
      </div>
    </React.Fragment>
  );
}

export default App;