import logo from './logo.svg';
import React from 'react';
import './App.css';

// if component export without default - named import
// import {Hone} from './Hone';
// import {Htwo} from './Hone'; // this will not work

// if component export with default
// import Hone from './Hone';
// import Htwo from './Hone'; // this will work

// function App() {
//   return (
//     <>
//       <Hone/>
//       <Htwo/>
//     </>
//   );
// }

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          Hello Changed Text
        </div>
      </div>
      <div className="footer"></div>
    </React.Fragment>
  );
}

export default App;
