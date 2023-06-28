import axios from 'axios';

function Registration(){
    // let regPayloadDetails = 
    let regHandler = (e) =>{
        e.preventDefault();

        // axios.post("https://reqres.in/api/register", {
        //     "email": "eve.holt@reqres.in",
        //     "password": "pistol"
        // })
        axios.post("https://reqres.in/api/register", {
            "email": "eve.holt@reqres.in"
        })
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            console.log(typeof(response.status));
            if(response.data.token && response.status === 200){
                localStorage.setItem("token", response.data.token);
                alert("User Registered!");
            }
            // let token = response.data;
        })
        .catch(error=>{
            console.log(error);
            console.log(error.response);
            console.log(error.response.data.error);
            alert(error.response.data.error);
        });
    }
    return(
        <div className="Register">
            <button onClick={e=> regHandler(e)}>Register</button>
        </div>
    )
}
export default Registration;

// localStorage.setItem("token", "token received from server");
// localStorage.getItem("token");
// localStorage.removeItem("token");
// localStorage.clear();

// sessionStorage.setItem("token", "token received from server");
// sessionStorage.getItem("token");
// sessionStorage.removeItem("token");
// sessionStorage.clear();

