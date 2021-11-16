// this page display Welcome page and navigate to login page if click on log out 

import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    const loginInfo = localStorage.getItem('token');

    // ====================================================
    //if login is NOT true then navigate to login Page  otherwise we are already in WELCOME page 
    useEffect(() => {
        if(!loginInfo) 
            navigate('/')    
    },[]);
    
    // ====================================================
    //clear the local storage and navigate to login page when click on log out button 
    function logOut()
    {
        localStorage.clear();
        navigate('/')
    }

    // ====================================================
    return (
        <div className="fixed-top col-lg-12 bg-dark" >
            <h1> Hello User</h1>
            <button className="btn btn-danger"  onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Welcome
