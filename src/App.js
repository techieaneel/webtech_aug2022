import React from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import Dashboard from './components/dashboard';
import Logout from './components/logout';
// import Formlabel from './formfields/formlabel';
// import Forminput from './formfields/forminput';
// import Formbtn from './formfields/formbtn';

// import Userinfo from './userinfo';

function App() {

  // var user = {
  //   name : "Sai",
  //   mobile: "9876543210",
  //   city: "Ongole"
  // }

  var isUserLoggedIn = false;

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        {/* <div className='section'>
          <form>
            <fieldset>
              <legend>Registration</legend>

              <div className='formrow'>
                <Formlabel labelText="Full Name" forText="fullname"/>
                <Forminput typeText="text" idText="fullname" phText='Enter Fullname'/>
              </div>

              <div className='formrow'>
                <Formlabel labelText="Mobile" forText="mobile"/>
                <Forminput typeText="tel" idText="mobile" phText='Enter Mobile'/>
              </div>

              <div className='formrow'>
                <Formlabel labelText="Email" forText="email"/>
                <Forminput typeText="email" idText="email" phText='Enter Email'/>
              </div>

              <div className='formrow'>
                <Formbtn idText="reset" btnText="Reset" isDisabled="false"/>
                <Formbtn idText="cancel" btnText="Cancel" isDisabled="true"/>
                <Formbtn idText="register" btnText="Register" isDisabled="false"/>
              </div>

            </fieldset>
          </form>
        </div> */}
        {/* <div className="section">
          <Userinfo userInfo={user}/>
        </div> */}

        <div className="section">
          {
            // isUserLoggedIn ? <Dashboard/> : <Logout/>
            !isUserLoggedIn ? <Logout/> : <Dashboard/>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// Props Drilling
// User Information is in APP (Parent) Component 
// The Information is required for Usertable (Grand Child) Component
// Even thou Information is not Required for Userinfo (Child) Component, but, it has to pass the Props.

// ContextAPI and useContext Hook
// Conditional Rendering