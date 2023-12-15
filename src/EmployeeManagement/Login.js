import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './css/Login.css'


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [empId, setempId] = useState('')
    const [firstName,setfirstName] = useState('')
    const [lastName,setlastName] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password,empId,firstName,lastName
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/view",{state:{id:empId}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
        <div className="login-div">
            <button className="login-btn"> <Link to="/signup">Sign Up</Link></button>
        </div>
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            
                            <input type="text" className="login__input" onChange={(e) => { setempId(e.target.value) }} placeholder="Employee ID" />
                        </div>
                        <div className="login__field">
                            
                            <input type="password" className="login__input" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </div>

                        <button >
                            <input type="submit"  onClick={submit} className="submit-btn"/>

                            
                        </button>
                    </form>

                    

                    
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login