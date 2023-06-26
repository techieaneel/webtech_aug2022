import React, {useEffect, useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';

function App() {
  let [userData, setUserData] = useState([
    {id: "OK1", name: "Sai", city: "Ongole", course: "Web Technologies"},
    {id: "OK2", name: "Vasu", city: "Venkatagiri", course: "Web Designing"},
    {id: "OK3", name: "Sravani", city: "Tirupati", course: "Full stack"},
  ]);
  console.log("userData...................", userData);

  let [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
    course: ""
  });
  // console.log("formData.....................", formData);

  const formHandler = (event) => {
    event.preventDefault();
    // console.log("event", event);
    // console.log("event.target", event.target);
    // console.log("event.target.value", event.target.value);
    setFormData({...formData, [event.target.name] : event.target.value});
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("userData...................", userData);
    // console.log("formData...................", formData);
    // setUserData(formData); // Error
    // setUserData([formData]); // Removes Existing Values
    setUserData([...userData, formData]);
  }

  // useEffect(() => {
  // },[userData]);

//   {
  //   "name": "morpheus",
  //   "job": "leader",
  //   "id": "17",
  //   "createdAt": "2023-06-26T01:54:54.382Z"
//   }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          <form>
            <div className='form_row'>
              <label htmlFor='uid'>User ID</label>
              <input type="text" id="uid" name="id" onChange={event=>formHandler(event)}/>
            </div>
            <div className='form_row'>
              <label htmlFor='uname'>User Name</label>
              <input type="text" id="uname" name="name" onChange={event=>formHandler(event)}/>
            </div>
            <div className='form_row'>
              <label htmlFor='ucity'>User City</label>
              <input type="text" id="ucity" name="city" onChange={event=>formHandler(event)}/>
            </div>
            <div className='form_row'>
              <label htmlFor='ucourse'>User Course</label>
              <input type="text" id="ucourse" name="course" onChange={event=>formHandler(event)}/>
            </div>
            <div className='form_row'>
              <button onClick={e => submitHandler(e)}>Submit</button>
            </div>
          </form>
          <table border="1" width="400" style={{borderCollapse: "collapse", margin: "auto"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
            {userData.map(item => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.course}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;