import React,{useState,useEffect} from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import './css/View.css'
import ProfileView from "./ProfileView";

export default function View() {

    const location = useLocation()

    const [employeedata,setEmployeeData] = useState([])
    const [selectedEmployee,setSelectedEmployee] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/getUsers')
    
        .then(employeedata => setEmployeeData(employeedata.data))
        .catch(err => console.log(err))

    }, [])
    async function onView(e) {
        const empId = e.target.value;
    
        try {
            const response = await axios.get('http://localhost:8000/getUsers');
            const data = response.data;
    
            console.log("Fetched Data", data);
    
            const selectedEmp = data.find(user => user.empId === empId);
    
            if (selectedEmp) {
                setSelectedEmployee(selectedEmp);
                navigate('/profile-view');
            } else {
                console.log(`Employee with EmpId ${empId} not found`);
            }
        } catch (error) {
            console.error(error);
        }
    }

        

    



    return (
        <>
            <div className="homepage">

            <table border='1'>
                    <thead>
                        <tr>
                            <th>Employee Id </th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Nic Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Position</th>
                            <th>Bank</th>
                            <th>Account Number</th>
                            <th>Gender</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                       employeedata.map(user => {
                         return <tr key = {user.empId}>
                            <td>{user.empId}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.nicNumber}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.address}</td>
                            <td>{user.dob}</td>
                            <td>{user.selectPosition}</td>
                            <td>{user.selectedBank}</td>
                            <td>{user.accNum}</td>
                            <td>{user.gender}</td>
                            <td><button value={user.empId} onClick={onView} name={"btn"+user.empId}>view</button></td>

                        </tr>
                       })
                    }
                    </tbody>

                </table>

                {/* Render details of the selected employee */}
            {/* Render ProfileView component when selectedEmployee is not null */}
        {selectedEmployee && (
          <ProfileView
            selectedEmployee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        )}

            </div>
        </>


    );
}