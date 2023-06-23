import React, {useEffect, useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';

function App() {

  let [initNum, setInitNum] = useState(0);
  let [isDecDisabled, setIsDecDisabled] = useState(false);
  console.log("initNum: ", initNum);
  console.log("isDecDisabled: ", isDecDisabled);

  // useEffect(() =>{},[]); // Syntax
  /* useEffect(() => { // It Renders only Once
    
  },[]); */ 

  useEffect(() => { // It Renders Each Time when "initNum" state Changes.
    initNum === 0 ? setIsDecDisabled(true) : setIsDecDisabled(false);
  },[initNum]);

  // useEffect(() => { // It Renders when Component unmount
  //   return () => {
  //     console.log("cleaned up");
  //   };
  // },[]);


  const incHandler = () => {
    console.log("initNum: ", initNum);
    setInitNum(initNum + 1);
    initNum === 0 ? setIsDecDisabled(true) : setIsDecDisabled(false);
  }

  const decHandler = () => {
    console.log("initNum: ", initNum);
    setInitNum(initNum - 1);
    initNum === 0 ? setIsDecDisabled(true) : setIsDecDisabled(false);    
  }

  const resetHandler = () => {
    console.log("initNum: ", initNum);
    setInitNum(0);
    initNum === 0 ? setIsDecDisabled(true) : setIsDecDisabled(false);    
  }


  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <p>The Initial Number is : {initNum}</p>
          {/* <button  onClick={num => setInitNum(initNum + 1)}>Increase +</button> &nbsp;
          <button onClick={num => setInitNum(initNum - 1)}>Decrease -</button> &nbsp;
          <button onClick={num => setInitNum(0)}>Reset</button> */}

          <button onClick={incHandler}>Increase +</button> &nbsp;
          <button 
            disabled={isDecDisabled}
            onClick={decHandler}
          >
            Decrease -
          </button> &nbsp;
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// Life-Cycle Methods in Class Based Components