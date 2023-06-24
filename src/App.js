import React, {useEffect, useState} from 'react';
import "./App.css";
import Logo from './components/logo';
import Menu from './components/menu';

function App() {
  // let [userData, setUserData] = useState([]);
  let [userData, setUserData] = useState([
    {id: "OK1", name: "Sai", city: "Ongole", course: "Web Technologies"},
    {id: "OK2", name: "Vasu", city: "Venkatagiri", course: "Web Designing"},
    {id: "OK3", name: "Sravani", city: "Tirupati", course: "Full stack"},
  ]);

  useEffect(() => {
  },[userData]);

  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Logo />          
          <Menu />
        </div>
        
        <div className="section">
          {/* <table border="1" width="400" style={{borderCollapse: "collapse", margin: "auto"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OK1</td>
                <td>Sai</td>
                <td>Ongole</td>
                <td>Web Technologies</td>
              </tr>
              <tr>
                <td>OK2</td>
                <td>Vasu</td>
                <td>Venkatagiri</td>
                <td>Web Designing</td>
              </tr>
              <tr>
                <td>OK3</td>
                <td>Sravani</td>
                <td>Tirupati</td>
                <td>Full stack</td>
              </tr>
            </tbody>
          </table> */}

          <form>
            <div className='form_row'>
              <label htmlFor='uid'>User ID</label>
              <input type="text" id="uid" />
            </div>
            <div className='form_row'>
              <label htmlFor='uname'>User Name</label>
              <input type="text" id="uname" />
            </div>
            <div className='form_row'>
              <label htmlFor='ucity'>User City</label>
              <input type="text" id="ucity" />
            </div>
            <div className='form_row'>
              <label htmlFor='ucourse'>User Course</label>
              <input type="text" id="ucourse" />
            </div>
            <div className='form_row'>
              <button>Submit</button>
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
          Test
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// Life-Cycle Methods in Class Based Components