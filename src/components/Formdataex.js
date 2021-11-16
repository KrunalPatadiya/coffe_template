//program is to pass the email and password using formdata object 

import React, { useEffect, useState } from 'react'
import { formdataex_response } from './Api_data'
import { useNavigate } from 'react-router-dom';

const Formdataex = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState("")

    //check if user is already login then navigate to welcome page
    const navigate = useNavigate();

    //if login is TRUE then navigate to WELCOME Page  otherwise we are already in login page 
    useEffect(() => {
        const loginInfo = localStorage.getItem('token');
        if (loginInfo)
            navigate('/welcome')

    }, []);

    //call get Data function Button Click 
    const getData = () => {

        // ==============================
        //perform input field validation
        if (email == "" || password == "") {
            setEmailErr("please fill the values")
        }
        else {

            //create formdata object
            const formData = new FormData();
            
            //in form data you need to append each item you cannot directly pass all data by creating array of objects
            //append data to foem data object with key, value pair
            formData.append('email', email);
            formData.append('password', password);

            //call function and pass form data as parameter and get the response 
            formdataex_response(formData).then((response) => {
                if (response.data.token) {
                    console.log("login Success")
                    localStorage.setItem("token", response.data.token);
                    navigate('/welcome')
                }
            }) 
            .catch(error =>
                console.log(error.message),
                setEmailErr("No User Found"),
                setEmail(""),
                setPassword("")
            )//must define error inside catch because it will get the exact error 
        }//else over

    }//getData Function over

    return (
        <>
            <h2 className="text-center" align="center">Registration Form</h2>
            {/* ===============================First Name,Last Name, Select Country=========================== */}
            <div className="row">

                <div className="offset-4 col-lg-4 p-2 text-center">
                    <label>Email :</label>
                    <input type="text" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control shadow"></input>
                </div>
            </div>
            <div className="row">
                <div className="offset-4 col-lg-4 p-2 text-center">
                    <label>Password :</label>
                    <input type="text" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} className="form-control shadow"></input>
                    <label className="text-danger shadow-lg">{emailErr}</label>
                </div>
            </div>
            <div className="row">
                <div className="offset-4 col-lg-4 p-2  ">
                    <input type="button" className="btn border-white btn-primary mx-2 shadow form-control"
                        value="REGISTER"
                        onClick={getData}
                    />
                </div>
            </div>
        </>
    )
}

export default Formdataex
