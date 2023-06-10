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

  function sayHi(){
    alert("Hello, Welcome to Website!");
  }

  function sayHiToPerson(userName){
    alert("Hi, " + userName + "! Welcome to Website!");
  }

  function disText(e){
    console.log("Written Text is: ", e.target.value);
  }

  /*
  // function logOut(){
  //   // Alert
  //   alert("Successfully Logged Out!");
  // }

  const logOut = () => alert("Successfully Logged Out!");
  */

  /*
  // function logOut(user){
  //  alert("Successfully Logged Out!");
  // }

  const logOut = user => alert("Hey, " + user + "! You Successfully Logged Out!");
  */

  // function logOut(fname, lname){
  //  alert("Successfully Logged Out!");
  // }
  
  const logOut = (fname, lname) => alert("Hey, " + fname + " " + lname + "! You Successfully Logged Out!");

  // function calc(num1, num2){
    // console.log("Total = ", num1 + num2);
  // return(num1 + num2);
  // }
  // console.log(calc(10, 20));

  let calc = (num1, num2) => num1+num2;
  console.log(calc(20,30));

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <a onBlur={x => alert("Blurred!")} href="" style={{color: "blue", display: "inline-block", padding: "20px 30px"}}>Show More...</a>
          <br/><br/>
          <span onClick={sayHi}>Say Hi!</span>
          <br/><br/>
          <span onClick={name => sayHiToPerson("Sai")}>Say Hi to Person</span>
          <br/><br/>
          <input type="text" onChange={e => disText(e)}/>
          <br/><br/>
          <button onClick={user => logOut("Vaasu", "Lucifer")}>Lagout</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// React Events
// Mouse Events
// Keyboard Events