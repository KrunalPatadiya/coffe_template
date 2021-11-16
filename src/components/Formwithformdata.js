import React, { useState, useEffect } from 'react'
import { registrationWithFormData } from './Api_data'
import { useNavigate } from 'react-router-dom';

function Formwithformdata() {

    // Array With total items
    var gender_list = ['Male', 'Female', 'Other'];
    var hobbies_list = ['Chess', 'BaseBall', 'Badminton', 'Swimming'];
    var countries_list = ['India', 'UAE', 'USA', 'Russia'];

    //use state getter setter method
    const [name, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [hobbies, setHobbies] = useState(['Chess']);
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    //use state for Error 
    const [nameErr, setFirstnameErr] = useState("");
    const [lnameErr, setLastnameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [genderErr, setGenderErr] = useState("");
    const [hobbiesErr, setHobbiesErr] = useState("");
    const [countryErr, setCountryErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [imageErr, setImageErr] = useState("");

    const navigate = useNavigate();

    //check if token is available in local storage then navigate into welcome page 
    useEffect(() => {
        const loginInfo = localStorage.getItem('token');
        if (loginInfo)
            navigate('/welcome')
    }, []);

    //handle hobbies check boxes
    const chk_hobbies = (e, nm) => {
        if (e)
            setHobbies(hobbies.concat(nm))
        else
            setHobbies(hobbies.filter(i => i !== nm))
    }

    //for default selection in check boxes
    const chk_hob = (item) => {
        if (hobbies.includes(item))
            return true;
        else
            return false;
    }

    const chkError = () => {
        setFirstnameErr("");
        setLastnameErr("");
        setEmailErr("");
        setCountryErr("");
        setGenderErr("");
        setHobbiesErr("");
        setCountryErr("");
        setPhoneErr("");
        setPasswordErr("")

        var valid = true;
        var name_pattern = new RegExp(/^[A-Za-z]+$/);
        var email_pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const pattern_call = new RegExp(/^[0-9\b]+$/);

        // ================first name error===============================
        if (name == "" || !name_pattern.test(name)) {
            setFirstnameErr("Enter valid firstname");
            valid = false;
        }

        // ================last name error===============================
        if (lname == "" || !name_pattern.test(lname)) {
            setLastnameErr("Enter Valid Last name");
            valid = false;
        }

        // =================email Error==============================
        if (email == "" || !email_pattern.test(email)) {
            setEmailErr("Enter Valid Email");
            valid = false;
        }
        // =================Country Error==============================
        if (country == "") {
            setCountryErr("Select the Country");
            valid = false;
        }

        // =================Gender Error==============================
        if (gender == "") {
            setGenderErr("Select the Gender");
            valid = false;
        }

        // =================Hobbies Error==============================
        if (hobbies.length == 0) {
            setHobbiesErr("Select the Hobbies");
            valid = false;
        }
        // =================Phone Error==============================
        if (phone.length == 0 || phone.length != 10 || !pattern_call.test(phone)) {
            setPhoneErr("Enter Valid Phone No.")
            valid = false;
        }

        // ===================================
        if (password == "") {
            setPasswordErr("Insert Password");
            valid = false;
        }
        // ===================================
        if (image == "") {
            setImageErr("Select Image");
            valid = false;
        }
        return valid;
    }

    // ============================================================================
    // Register Button Click Function 
    // ============================================================================
    // ===========addData function =============================================
    const addData = () => {
        // ============================
        // call chkError it return the valid variable value like (true or false) 
        if (chkError()) {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('lastname', lname);
            formData.append('email', email);
            formData.append('gender', gender);
            formData.append('hobbies', hobbies);
            formData.append('country', country);
            formData.append('phone', phone);
            formData.append('password', password);
            formData.append('image', image);
            console.log(image);

            // call function and pass form data as parameter and get the response 
            registrationWithFormData(formData).then((response) => {
                if (response.data.token) {
                    console.log(response)
                    console.log("login Success")
                    localStorage.setItem("token", response.data.token);
                    navigate("/welcome")
                }
            }).catch(error => {
                console.log(error.message)
            })

            setFirstname("");
            setLastname("");
            setEmail("");
            setGender("");
            setHobbies([]);
            setCountry("");
            setPhone("");
            setPassword("");
            setImageErr();
        }
    }//addData Function over here


    //function to set the data to formdata and pass formdata to Api_data file to get the desired response 

    return (

        <div id="form_bg" className="container rounded shadow bg-white p-3 mt-2">
            <h2 className="text-white text-center" align="center">Registration Form</h2>
            {/* ===============================First Name,Last Name, Select Country=========================== */}
            <div className="row">

                <div className="col-lg-4 ">
                    <label className="font-weight-bold">First Name :</label>
                    <input type="text"
                        placeholder="Enter FirstName"
                        value={name}
                        onChange={e => setFirstname(e.target.value)}
                        className="form-control shadow">
                    </input>
                    <label className="text-danger">{nameErr}</label>
                </div>

                <div className="col-lg-4">
                    <label className="font-weight-bold">Last Name :</label>
                    <input type="text"
                        placeholder="Enter LastName"
                        value={lname}
                        onChange={e => setLastname(e.target.value)}
                        className="form-control shadow">
                    </input>
                    <label className="text-danger">{lnameErr}</label>
                </div>

                <div className="col-lg-4">
                    <label className="font-weight-bold">Select Country :</label>
                    <select className="form-control shadow" onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Select Country</option>
                        {
                            countries_list.map(item => (
                                <option value={item} selected={item == country}>{item}</option>
                            ))
                        }
                    </select>
                    <label className="text-danger">{countryErr}</label>
                </div>
            </div>
            {/* =================================Email,Phone,Password================================= */}
            <div className="row">

                <div className="col-lg-6">
                    <label className="font-weight-bold">Email :</label>
                    <input type="email"
                        placeholder="Enter Email"
                        value={email}
                        className="form-control shadow"
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                    <label className="text-danger">{emailErr}</label>
                </div>

                <div className="col-lg-6">
                    <label className="font-weight-bold">Phone No. :</label>
                    <input type="text"
                        placeholder="Enter Phone No."
                        value={phone}
                        className="form-control shadow"
                        onChange={e => setPhone(e.target.value)}>
                    </input>
                    <label className="text-danger">{phoneErr}</label>

                </div>


            </div>
            {/* ==============================Hobby,gender  ==================================== */}

            <div className="row">
                <div className="col-lg-6">
                    <label className="font-weight-bold">Hobbies :</label>
                    {
                        hobbies_list.map(item => (
                            <>
                                <input type="checkbox"
                                    className="mx-3 shadow"
                                    onClick={(e) => chk_hobbies(e.target.checked, item)}
                                    checked={chk_hob(item)} />{item}
                            </>
                        ))
                    }
                    <br /><label className="text-danger">{hobbiesErr}</label>
                </div>

                <div className="col-lg-6 row">
                    <label className="font-weight-bold align-bottom col-lg-3">Password :</label>
                    <span className="col-lg-9">
                        <input type="password"
                            placeholder="Enter Password."
                            value={password}
                            className="form-control shadow"
                            onChange={e => setPassword(e.target.value)}>
                        </input>
                        <label className="text-danger">{passwordErr}</label>
                    </span>
                </div>
            </div>

            {/* ==============================File,gender  ==================================== */}
            <div className="row">
                <div className="col-lg-6">
                    <label className="font-weight-bold">Gender :</label>
                    {
                        gender_list.map(item => (
                            <>
                                <input
                                    type="radio"
                                    name="gender" value={item}
                                    checked={gender == item}
                                    onClick={e => setGender(e.target.value)}
                                    className="mx-3 shadow" />
                                {item}
                            </>
                        ))
                    }<br />
                    <label className="text-danger">{genderErr}</label>
                </div>
                <div className="col-lg-6 row">
                    <div className="col-lg-3">
                        <label className="font-weight-bold ">Select Image :</label>
                    </div>
                    <div className="col-lg-9">
                        <span>
                            <input type="file"
                                onChange={(e) => setImage(e.target.files[0])} />
                            {/* this will store whole image object */}
                            <label className="text-danger">{imageErr}</label>
                        </span>
                    </div>
                </div>
            </div>
            {/* ============================Register,Delete Button====================================== */}
            <div className="row pb-1" >
                <div className=" col-lg-12 text-center ">
                    <input
                        type="button"
                        className="btn  border-white btn-primary font-weight-bold mx-2 shadow"
                        value="Register"
                        onClick={addData}
                    />
                </div>
            </div>
        </div>// container over here

    )
}

export default Formwithformdata


