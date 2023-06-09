import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Styles from './styles.module.css';

function App() {

  // Pera CSS Object
  let pera = {
    fontFamily: '"arial", sans-serif',
    color: "#999",
    textAlign: "center"
  }

  let centerDiv = {
    textAlign: "center"
  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <h1 style={{color: "red", backgroundColor: "yellow", textAlign: "center", padding: "10px 0"}}> This is a Heading </h1>
          <p style={pera}> This is a Peragraph </p>
          <div style={centerDiv}>
            <span className={Styles.centerspan}>This is a Span Text</span>
            <blockquote className={Styles.babaquote}>
              Ipsam fugit quibusdam eum neque bibendum. Pretium illum beatae molestie soluta quis, aenean dignissim distinctio commodo, repellat ullamco. Illum ullamcorper cillum tortor ipsum modi? Hymenaeos.
              <cite>Lucifer Baba</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// Inline CSS
// Internal CSS Object
// External CSS File
// CSS Module