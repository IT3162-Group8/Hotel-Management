import React from "react"
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Profile from "./Profile";
import View from "./View";
import './css/Home.css'

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <Link to="/login">Login Page</Link>
            <Link to="/signup">Signup Page</Link>

            
            <View />

        </div>
    )
}

export default Home