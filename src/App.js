import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Formlabel from './formfields/formlabel';
import Forminput from './formfields/forminput';
import Formbtn from './formfields/formbtn';

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
        {/* <div className='banner'>
          <img src="https://www.w3schools.com/w3images/map.jpg" style={{width: "100%"}}/>
        </div> */}
        <div className='section'>
          <form>
            <fieldset>
              <legend>Registration</legend>

              <div className='formrow'>
                {/* <label htmlFor='fullname'>FullName</label> */}
                <Formlabel labelText="Full Name" forText="fullname"/>
                {/* <input type="text" id="fullname" placeholder='Enter Fullname'/> */}
                <Forminput typeText="text" idText="fullname" phText='Enter Fullname'/>
              </div>

              <div className='formrow'>
                {/* <label htmlFor='mobile'>Mobile</label> */}
                <Formlabel labelText="Mobile" forText="mobile"/>
                {/* <input type="tel" id="mobile"  placeholder='Enter Mobile'/> */}
                <Forminput typeText="tel" idText="mobile" phText='Enter Mobile'/>
              </div>

              <div className='formrow'>
                {/* <label htmlFor='email'>Email</label> */}
                <Formlabel labelText="Email" forText="email"/>
                {/* <input type="email" id="email"  placeholder='Enter Email'/> */}
                <Forminput typeText="email" idText="email" phText='Enter Email'/>
              </div>

              <div className='formrow'>
                {/* <button id="reset">Reset</button>
                <button id="cancel">Cancel</button>
                <button id="register">Register</button> */}
                <Formbtn idText="reset" btnText="Reset" isDisabled="false"/>
                <Formbtn idText="cancel" btnText="Cancel" isDisabled="true"/>
                <Formbtn idText="register" btnText="Register" isDisabled="false"/>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;