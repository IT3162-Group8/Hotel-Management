import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { clear } from "@testing-library/user-event/dist/clear";
import './css/Signup.css'


function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [empId, setempId] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDob] = useState('')
    const [selectedBank, setSelectedBank] = useState('')
    const [accNum, setAccNum] = useState('')
    const [selectPosition, setSelectedPosition] = useState('')
    const [nicNumber, setNicNumber] = useState('')
    const [gender,setGender] = useState('')

    const handleBankChange = (e) => {
        setSelectedBank(e.target.value);
    };
    const handlePosition = (e) => {
        setSelectedPosition(e.target.value);
    };
    const handleRadioChange = (e) => {
        setGender(e.target.value);
    }




    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, password, empId, firstName, lastName, address, dob, selectedBank, accNum, selectPosition, nicNumber,gender
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/view", { state: { id: empId } })
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <>
        <div className="login-div">
            <button className="login-btn"> <Link to="/login">Login</Link></button>
        </div>
        <div>

            <h1 className="heading">Add Employee</h1>
        </div>
        
        <div className="form-container">

            <div className="left-container">
            <h3>Personal Details</h3>

            <form action="POST">
                <div>



                    <div  className="form-field">
                        <label>Email:</label>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    </div>
                    <br />

                    <br />

                    <div className="form-field">
                        <label>First Name:</label>
                        <input type="text" onChange={(e) => { setfirstName(e.target.value) }} placeholder="First Name" />
                    </div>

                    <div className="form-field">
                        <label>Last Name:</label>
                        <input type="text" onChange={(e) => { setlastName(e.target.value) }} placeholder="Last Name" />
                    </div>
                    <div className="form-field">
                        <label>Address:</label>
                        <input type="text" onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
                    </div>
                    <div className="form-field">
                        <label>Date of Birth:</label>
                        <input type="date" onChange={(e) => { setDob(e.target.value) }} />
                    </div>
                    <div className="form-field">
                        <label>NIC Number:</label>
                        <input type="text" onChange={(e) => { setNicNumber(e.target.value) }} placeholder="Nic Number" />
                    </div>
                    <div className="form-field">
                        <label>Gender:</label>
                        Male:<input type="radio" value="Male" checked={gender === 'Male' } onChange={handleRadioChange} />
                        Female:<input type="radio" value="Female"  onChange={handleRadioChange} />
                    </div>


                </div>
            </form>
            </div>
            <div className="right-container"> 
                <h3>Employee Details</h3>
                <form action="POST">
                    <div className="form-field">
                        <label>Employee Id:</label>
                        <input type="text" onChange={(e) => { setempId(e.target.value) }} placeholder="Employee Id" />

                    </div>
                    <div className="form-field">
                        <label>Password:</label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    </div>
                    <div className="form-field">
                        <label>Position:</label>
                        <select onChange={handlePosition} value={selectPosition}>
                            <option value="">Select a position</option>
                            <option value="ceo">CEO</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>Select Bank:</label>
                        <select onChange={handleBankChange} value={selectedBank}>
                            <option value="">Select a bank</option>
                            <option value="bank_of_ceylone">Bank of Ceylon</option>
                            <option value="people's_bank">People's Bank</option>
                            <option value="citibank">Citibank</option>
                            <option value="commrcial_bank">Commercial Bank</option>
                            <option value="hatton_national_bank">Hatton National Bank</option>

                        </select>

                    </div>
                    <div className="form-field">

                    <lable>Account Number:</lable>
                    <input type="text" onChange={(e) => { setAccNum(e.target.value) }} placeholder="Account Number" />
                    </div>

                </form>
            </div>




            <div><input type="submit" onClick={submit} className="submit-btn"/></div>




            

        </div>
        </>
    )
}

export default Login