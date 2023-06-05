import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          {/* Logo Comes Here */}
          <Logo />
          
          {/* Menu Comes Here */}
          <Menu />
        </div>
        <div className='banner'>
          <img src="https://www.w3schools.com/w3images/map.jpg" style={{width: "100%"}}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;