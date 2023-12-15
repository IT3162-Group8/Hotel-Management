import React, { useState,useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Profile(){

    const location = useLocation()

    const [someState,setSomeState] = useState('');

    const [users,setUsers] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8000/getUsers')
    
        .then(users => setUsers(users.data))
        .catch(err => console.log(err))

    }, [])

    return(
    <>
    <table border="1" cellSpacing={0} align="left" cellPadding={3}>

                <tbody>
                    {
                        users.map(user =>{
                            return (
                                <>

                                <tr>
                                
                                    <td>Employee ID: {user.empId}</td>
                                    </tr>
                                    <tr>
                                        <td>Name: {user.firstName +" "+user.lastName}</td>
                                    </tr>
                                    <tr><td>Address:{user.address}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Date of Birth:{user.dob}</td>
                                    </tr>
                                    <tr>
                                        <td>Nic Number:{user.nicNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Position:{user.selectPosition}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender:{user.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Bank:{user.selectedBank}</td>
                                    </tr>
                                    <tr>
                                        <td>Account Number:{user.accNum}</td>
                                    </tr>
                                    </>
                            );
                        })
                    }
                    
                    
                    
                    
                    
                </tbody>
            </table>
    
    </>
    );
}