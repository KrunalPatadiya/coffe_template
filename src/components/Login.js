// this page display login form and navigate to welcome page when email is true and also store a 
// token to local storage  

import React, { useState ,useEffect} from 'react'
import { redirect } from './Api_data'


//hook use to navigate from one to another component
import {useNavigate} from 'react-router-dom';
// ===================================
// this is registered email :  eve.holt@reqres.in
// ===================================

function Login() {

    const loginInfo = localStorage.getItem('token');
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    // ===================================================================

    //if login is TRUE then navigate to WELCOME Page  otherwise we are already in login page 
    useEffect(() => {
        if(loginInfo) 
            navigate('/welcome')
        
    },[]);

    // ===================================================================
    //here we get the email and check it is available in login api if it is available then store the token in local storage  
    function redirect_to_api(name, password) 
    {
        if (name == "")
            alert('plz fill proper email')

        //pass name and password to redirect function which is located in Api_data  
        return redirect(name, password)
            .then((r) => {
                if (r.data.token != " ") {
                    alert("login Success")
                    localStorage.setItem("token", r.data.token);
                    navigate('/welcome')
                }
                else
                    console.log("response not get");
            })
            .catch(e =>
                console.log("No user Found")
            )
    }//redirect_to_api function over
    // ===================================================================

    return (
        <div className="row text-center offset-4 col-lg-4 bg-info py-3 justify-content-center shadow-lg">
            <h3>Sign In</h3>

            <input type="text" className="form-control my-3" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Your email" />
            <input type="text" className="form-control my-3" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Your Name" />

            <button className="btn btn-primary form-control" onClick={() => redirect_to_api(name, password)} >Log In </button>

            <div className="offset-4"></div>
        </div>
    )
}

export default Login
