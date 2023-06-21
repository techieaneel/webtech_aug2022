import React, {useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';
import ChildA from './components/childA';
import ChildB from './components/childB';

function App() {

  let [student, getStudent] = useState("");
  console.log("student", student);

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <ChildA getStudentProp={getStudent}/>
          <ChildB studentProp={student}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;