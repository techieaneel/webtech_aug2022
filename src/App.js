import logo from './logo.svg';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
      <div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        {/*<i class="fa fa-user"></i>*/}
        {/* <FontAwesomeIcon icon="fa fa-user" /> */}
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// default import and export
// module OR named import and export

// sending our (local) changes to git repository (online)
// git status
// git add
// git commit
// git push

// Receiving our git repository (online) code to local
// git fetch
// git pull

// git clone
// git init