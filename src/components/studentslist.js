import {useState, useEffect} from 'react';
import axios from "axios";

function Studentslist(){

    // let students = [
    //     {
    //         "id": 7,
    //         "email": "michael.lawson@reqres.in",
    //         "first_name": "Michael",
    //         "last_name": "Lawson",
    //         "avatar": "https://reqres.in/img/faces/7-image.jpg"
    //     },
    //     {
    //         "id": 8,
    //         "email": "lindsay.ferguson@reqres.in",
    //         "first_name": "Lindsay",
    //         "last_name": "Ferguson",
    //         "avatar": "https://reqres.in/img/faces/8-image.jpg"
    //     },
    //     {
    //         "id": 9,
    //         "email": "tobias.funke@reqres.in",
    //         "first_name": "Tobias",
    //         "last_name": "Funke",
    //         "avatar": "https://reqres.in/img/faces/9-image.jpg"
    //     },
    //     {
    //         "id": 10,
    //         "email": "byron.fields@reqres.in",
    //         "first_name": "Byron",
    //         "last_name": "Fields",
    //         "avatar": "https://reqres.in/img/faces/10-image.jpg"
    //     },
    //     {
    //         "id": 11,
    //         "email": "george.edwards@reqres.in",
    //         "first_name": "George",
    //         "last_name": "Edwards",
    //         "avatar": "https://reqres.in/img/faces/11-image.jpg"
    //     },
    //     {
    //         "id": 12,
    //         "email": "rachel.howell@reqres.in",
    //         "first_name": "Rachel",
    //         "last_name": "Howell",
    //         "avatar": "https://reqres.in/img/faces/12-image.jpg"
    //     }
    // ];

    let [allStudents, getStudents] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
        .then(res => {
          console.log(res.data.data);
          console.log(typeof(res.data.data));
          getStudents(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    },[]);
    
    return (
        <table border="1" width="400" style={{borderCollapse: "collapse", margin: "auto"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
            {
                allStudents.map(item => 
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name + " " + item.last_name}</td>
                    <td>{item.email}</td>
                    <td><img src={item.avatar} alt="" width="100"/></td>
                    </tr>
                )
            }
            </tbody>
          </table>
    )
}
export default Studentslist;